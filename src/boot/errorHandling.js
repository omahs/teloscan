/* eslint-disable @typescript-eslint/no-var-requires */
import { boot } from 'quasar/wrappers';
import { Dialog, Notify } from 'quasar';
import { getCurrentInstance } from 'vue';

// to persist the notification and require user to dismiss pass `true` as second param
const errorNotification = function(error, dismiss = false) {
    let errorStr;
    if (error !== undefined) {
        if (typeof error.startsWith !== 'function') {
            errorStr = error;
        } else if (error.startsWith('assertion failure with message:')) {
            errorStr = error.split('assertion failure with message:')[1];
        } else {
            errorStr = error;
        }
    } else {
        errorStr = 'Cancelled transaction';
    }

    Notify.create({
        color: 'negative',
        icon: 'error',
        timeout: dismiss ? 0 : 5000,
        message: `${errorStr}`,
        actions: dismiss ? [
            { label: $t('notification.dismiss_label'), color: 'white' },
        ] : [],
    });
};

const unexpectedErrorNotification = function(error) {
    Notify.create({
        color: 'dark',
        icon: 'warning',
        message: `${error}`,
    });
};

const warningNotification = function(warning) {
    Notify.create({
        color: 'warning',
        icon: 'warning',
        message: warning,
    });
};

const successNotification = function(message) {
    Notify.create({
        color: 'primary',
        icon: 'done',
        message: `${message}`,
    });
};

// ---------- new notification layouts ---------------

let $t = function(message) {
    return message;
};

class NotificationAction {
    constructor(payload) {
        this.label     = payload.label;
        this.class     = payload.class;
        this.handler   = payload.handler;
        this.onDismiss = payload.onDismiss;
        this.iconRight = payload.iconRight;
        this.color     = payload.color;
    }
}

const crossIcon = require('src/assets/icon--cross.svg');
const infoIcon  = require('src/assets/icon--info.svg');
const checkIcon = require('src/assets/icon--check.svg');
const discoIcon = require('src/assets/icon--disconnected.svg');
const warningIcon = require('src/assets/icon--warning.svg');
const icons = {
    cross: crossIcon,
    info: infoIcon,
    check: checkIcon,
    disco: discoIcon,
    warning: warningIcon,
};

const html = `
    <div class="c-notify__container c-notify__container--{type} c-notify__container--{random}">
        <div class="c-notify__header"></div>
        <div class="c-notify__title c-notify__title--{type}">
            <img src='{svg}' class="c-notify__icon" />
            <span>{title}</span>
        </div>
        <div class="c-notify__message">
            {message}
        </div>
        <div class="c-notify__checkbox-container c-notify__checkbox--{remember}">
            <input type="checkbox" id="c-notify__checkbox--{remember}" class="c-notify__checkbox" />
            <label for="c-notify__checkbox--{remember}" class="c-notify__label">{remember-my-choice}</label>
        </div>
    </div>
`;

const notifyMessage = function(type, icon, title, message, payload, remember = '') {
    // action buttons
    const actions = [];
    const dismiss_btn = {
        label: $t('notification.dismiss_label'),
        class: 'c-notify__action-btn',
    };
    const link_btn = {
        label: $t('notification.success_see_trx_label'),
        color: 'positive',
        iconRight: 'launch',
        class: 'c-notify__action-btn',
        handler: () => {
            window.open(payload, '_blank');
        },
    };
    const details_btn = {
        label: $t('notification.error_see_details_label'),
        class: 'c-notify__action-btn ',
        handler: () => {
            let content = '';
            // We try to parse the payload to obtain a content string
            try {
                // First we try to parse the payload as JSON
                content = JSON.stringify(payload, null, 2);
            } catch (e) {
                // If it fails, we discard the error and try to executes toString() from the payload
                try {
                    content = payload.toString();
                } catch (e) {
                    // If it fails, likely the payload is null (or some unknown object with no toString function),
                    // so we set the content to a forced string to have something to show
                    content = payload + ' ';
                }
            }

            // If the content is a valid JSON, it should be possible to parse it and re stringify it using a pretty format
            try {
                const parsed = JSON.parse(content);
                content = JSON.stringify(parsed, null, 4);
                content = `<pre>${content}</pre>`;
            } catch (e) {
                // If it fails, we discard the error and use the original content
            }

            Dialog.create({
                class: 'c-notify__dialog',
                title: $t('notification.error_details_title'),
                message: '<q-card-section>' + content + '</q-card-section>',
                html: true,
            });
        },
    };
    const action_btn = {
        label: $t(payload?.label ?? '') ?? $t('notification.error_see_details_label'),
        color: payload?.color ?? type === 'error' ? 'negative' : 'positive',
        iconRight: payload?.iconRight,
        class: 'c-notify__action-btn ' + payload?.class ? payload?.class : '',
        handler: payload?.handler,
    };
    const hidden_btn = {
        label: 'hidden',
        class: 'c-notify__action-btn c-notify__action-btn--hide',
    };

    let onDismiss = null;

    // adding buttons
    if (typeof payload === 'string' && type === 'success') {
        actions.push(link_btn);
    } else if (typeof payload === 'object' && payload instanceof NotificationAction) {
        actions.push(action_btn);
        onDismiss = payload.onDismiss;
    } else if (typeof payload === 'object' && type === 'error') {
        actions.push(details_btn);
    } else {
        actions.push(hidden_btn);
    }
    actions.push(dismiss_btn);
    if (type === 'neutral') {
        // if neutral, no buttons
        actions.splice(0, actions.length);
    }

    let final_message = '<span>' + $t(message.toString() ?? '') + '</span>';
    if (Array.isArray(message)) {
        final_message = message.map(
            m => ` <${m.tag ?? 'span'} class="${m.class}">${m.text}</${m.tag ?? 'span'}> `,
        ).join('');
    }

    let timeout = 4000;
    if (type === 'error' || type === 'info') {
        timeout = 0;
    }

    let position = 'bottom';
    if (type === 'neutral') {
        position = 'bottom-right';
    }

    let random = Math.floor(Math.random() * 1000000);


    function replaceAllOccurrences(html, replacements) {
        let modifiedHtml = html;
        for (let [key, value] of Object.entries(replacements)) {
            const regex = new RegExp(key.replace(/[-\\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
            modifiedHtml = modifiedHtml.replace(regex, value);
        }
        return modifiedHtml;
    }

    const replacements = {
        '{svg}': icon,
        '{type}': type,
        '{title}': title,
        '{random}': random,
        '{remember}': remember,
        '{message}': final_message,
        '{remember-my-choice}': $t('notification.dont_show_message_again'),
    };

    const finalHtml = replaceAllOccurrences(html, replacements);

    return Notify.create({
        timeout,
        position,
        message: finalHtml,
        html: true,
        classes: 'c-notify',
        actions,
        onDismiss,
    });
};

const notifySuccessTransaction = function(link) {
    return notifyMessage (
        'success',
        checkIcon,
        $t('notification.success_title_trx').toUpperCase(),
        $t('notification.success_message_trx'),
        link,
    );
};

const notifySuccessMessage = function(message, payload) {
    return notifyMessage (
        'success',
        checkIcon,
        $t('notification.success_title_trx').toUpperCase(),
        message,
        payload,
    );
};

const notifySuccessCopy = function() {
    return notifyMessage (
        'success',
        checkIcon,
        $t('notification.success_title_copied').toUpperCase(),
        $t('notification.success_message_copied'),
    );
};

const notifyFailure = function(message, payload) {
    return notifyMessage (
        'error',
        crossIcon,
        $t('notification.error_title').toUpperCase(),
        message,
        payload,
    );
};

const notifyFailureWithAction = function(message, payload) {
    return notifyMessage (
        'error',
        crossIcon,
        $t('notification.error_title').toUpperCase(),
        message,
        new NotificationAction(payload),
    );
};

const notifyWarningWithAction = function(message, payload) {
    return notifyMessage (
        'error',
        warningIcon,
        $t('notification.warning_title').toUpperCase(),
        message,
        new NotificationAction(payload),
    );
};

const notifyDisconnected = function() {
    return notifyMessage (
        'error',
        discoIcon,
        $t('notification.error_title_disconnect'),
        $t('notification.error_message_disconnect'),
    );
};

const notifyNeutralMessage = function(message) {
    return notifyMessage (
        'neutral',
        null,
        null,
        message,
    );
};

const notifyRememberInfo = function(title, message, payload, key) {
    const id = `c-notify__checkbox--${key}`;
    const storageKey = 'c-notify--dismissed-messages';
    const dismissed = JSON.parse(localStorage.getItem(storageKey)) ?? {};
    if (dismissed[id]) {
        return;
    }
    const notification = notifyMessage (
        'info',
        infoIcon,
        title,
        message,
        payload,
        key,
    );

    const handler = (event) => {
        // If the user click the checkbox, we set the flag in the local storage
        if (event.target.id === id) {
            const checkbox = document.getElementById(id);
            if (checkbox.checked) {
                dismissed[id] = true;
            } else {
                delete dismissed[id];
            }
            localStorage.setItem(storageKey, JSON.stringify(dismissed));
        } else {
            // catching Dismiss button click
            if (event.target.parentNode.classList.contains('q-btn__content')) {
                window.removeEventListener('click', handler);
            }
        }
    };

    window.addEventListener('click', handler);
    return notification;
};



export default boot(({ app, store }) => {
    app.config.globalProperties.$errorNotification           = errorNotification;
    app.config.globalProperties.$unexpectedErrorNotification = unexpectedErrorNotification;
    app.config.globalProperties.$warningNotification         = warningNotification;
    app.config.globalProperties.$successNotification         = successNotification;
    store['$errorNotification']                              = app.config.globalProperties.$errorNotification;
    store['$unexpectedErrorNotification']                    = app.config.globalProperties.$unexpectedErrorNotification;
    store['$warningNotification']                            = app.config.globalProperties.$warningNotification;
    store['$successNotification']                            = app.config.globalProperties.$successNotification;

    // new Message notifications handlers
    app.config.globalProperties.$notifySuccessTransaction = notifySuccessTransaction;
    app.config.globalProperties.$notifySuccessMessage     = notifySuccessMessage;
    app.config.globalProperties.$notifySuccessCopy        = notifySuccessCopy;
    app.config.globalProperties.$notifyFailure            = notifyFailure;
    app.config.globalProperties.$notifyFailureWithAction  = notifyFailureWithAction;
    app.config.globalProperties.$notifyWarningWithAction  = notifyWarningWithAction;
    app.config.globalProperties.$notifyDisconnected       = notifyDisconnected;
    app.config.globalProperties.$notifyNeutralMessage     = notifyNeutralMessage;
    app.config.globalProperties.$notifyRememberInfo       = notifyRememberInfo;
    store['$notifySuccessTransaction']                    = app.config.globalProperties.$notifySuccessTransaction;
    store['$notifySuccessMessage']                        = app.config.globalProperties.$notifySuccessMessage;
    store['$notifySuccessCopy']                           = app.config.globalProperties.$notifySuccessCopy;
    store['$notifyFailure']                               = app.config.globalProperties.$notifyFailure;
    store['$notifyFailureWithAction']                     = app.config.globalProperties.$notifyFailureWithAction;
    store['$notifyWarningWithAction']                     = app.config.globalProperties.$notifyWarningWithAction;
    store['$notifyDisconnected']                          = app.config.globalProperties.$notifyDisconnected;
    store['$notifyNeutralMessage']                        = app.config.globalProperties.$notifyNeutralMessage;
    store['$notifyRememberInfo']                          = app.config.globalProperties.$notifyRememberInfo;

    // transaction notifications handlers
    store['$t'] = app.config.globalProperties.$t;
    $t          = app.config.globalProperties.$t;
});

export {
    errorNotification,
    unexpectedErrorNotification,
    warningNotification,
    successNotification,
    notifySuccessTransaction,
    notifySuccessMessage,
    notifySuccessCopy,
    notifyFailure,
    notifyFailureWithAction,
    notifyWarningWithAction,
    notifyDisconnected,
    notifyNeutralMessage,
    notifyRememberInfo,
    notifyMessage,
    icons,
    NotificationAction,
};

export function useNotifications() {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error('useNotifications must be used within a setup function.');
    }

    const { proxy } = instance;

    const notifySuccessTransaction = proxy.$notifySuccessTransaction;
    const notifySuccessMessage     = proxy.$notifySuccessMessage;
    const notifySuccessCopy        = proxy.$notifySuccessCopy;
    const notifyFailure            = proxy.$notifyFailure;
    const notifyFailureWithAction  = proxy.$notifyFailureWithAction;
    const notifyDisconnected       = proxy.$notifyDisconnected;
    const notifyNeutralMessage     = proxy.$notifyNeutralMessage;
    const notifyRememberInfo       = proxy.$notifyRememberInfo;

    return {
        notifySuccessTransaction,
        notifySuccessMessage,
        notifySuccessCopy,
        notifyFailure,
        notifyFailureWithAction,
        notifyDisconnected,
        notifyNeutralMessage,
        notifyRememberInfo,
    };
}
