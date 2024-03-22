export default {
    locale: {
        current_language_name: 'Français',
    },
    pages: {
        blockpage: {
            block: 'Bloc',
            overview: 'Vue d\'ensemble',
            transactions: 'Transactions',
        },
        transactions: {
            contract_deployment: 'Déploiement de contrat',
            deposit_action_name: 'Dépôt',
            deposit_native: 'Dépôt (natif)',
            five_hundred_k_disclaimer: 'Affichage des 500 000 derniers enregistrements sur { total }',
            for_block: 'pour le bloc',
            for: 'pour',
            gas_info_label: 'Info gaz',
            native_deposit_tooltip: 'Dépôt depuis Telos natif',
            native_withdraw_tooltip: 'Retrait vers Telos natif',
            nonce_label: 'Nonce',
            see_more_details: 'Voir plus de détails',
            see_tx_preview_tooltip: 'Voir l\'aperçu des détails de la transaction',
            status_label: 'Statut',
            to: 'à',
            transaction_action_label: 'Action de transaction',
            transaction_fee_label: 'Frais de transaction',
            transactions: 'Transactions',
            transfer_for_x_tlos_from: 'Transfert de { amount } TLOS depuis',
            transfer_tlos_action_name: 'Transférer TLOS',
            withdraw_action_name: 'Retrait',
            withdraw_native: 'Retrait (natif)',
            x_gas_used_of_y_limit: '{ amount } gaz utilisé sur une limite de { limit }',
        },
        transaction: {
            page_title: 'Détails de la Transaction',
            overview: 'Aperçu',
            logs: 'Journaux',
            internal: 'Transactions Internes',
        },
        home: {
            telos_evm_explorer: 'L\'exploreur Telos EVM',
            market_cap: 'Capitalisation',
            last_finalized_block: 'Dernier bloc finalisé',
            total_transactions: 'Total des transactions',
        },
        error: {
            title: 'Page non trouvée.',
            subtitle: 'Veuillez vérifier à nouveau l\'URL. Si elle semble correcte, réessayez plus tard.',
        },
        issuer: 'Émetteur',
        account_not_found: 'Nous n\'avons pas pu trouver ce compte',
        approvals: 'Permissions',
        supported_interfaces: 'Interface(s) supporté(s) connue(s)',
        explore_transactions: 'Explorer les transactions',
        recent_transactions: 'Transactions récentes',
        telos_evm_explorer: 'Exploreur Telos EVM',
        rpc_endpoints: 'RPC',
        monitor: 'Moniteur',
        go_home: 'Accueil',
        minted: 'Frappé(s)',
        holders: 'Détenteurs',
        evm_holders: 'Tout détenteurs sur Telos EVM',
        total_nfts_minted: 'Total des NFTs crés dans cette collection',
        telos_supply: 'Réserve Telos EVM',
        select_sol_file: 'Sélectionnez votre fichier .sol pour l\'envoyer',
        select_json_file: 'Sélectionnez un fichier avec un objet JSON standard à envoyer',
        paste_contract_contents: 'vous devez séléctionner un fichier à envoyer ou utiliser le boutton de bascule pour pouvoir coller le contenu de votre contrat',
        contract_address: 'Adresse du contrat',
        enter_contract_address: 'Veuillez saisir une adresse valide, ex: \'0x0123...\'',
        invalid_address_format: 'Format de l\'adresse invalide',
        compiler_version: 'Version du compiler',
        select_compiler_version: 'sélectionner la version du compiler',
        eg_contracts: 'e.g., \'contrats/\'',
        contract_file_directory_path: 'Chemin des fichiers du contrat (laissez vide si non applicable)',
        invalid_path_format: 'le chemin doit finir avec une barre oblique /',
        upload_file: 'envoyer le fichier',
        text_input: 'entrée texte',
        runs_value_for_optimization: 'Nombre d\'itération d\'optimisation',
        constructor_arguments: 'Arguments du constructeur',
        comma_seperated_values: 'valeurs séparées par une virgule ex: Bob,123,0x12345...',
        no_trailing_commas: 'pas de virgule finale',
        paste_contract_code_here: 'copier/coller le code du contract ici...',
        enter_contract_text: 'Entrer ou coller le texte du contat',
        verify_contract: 'Verifier le contrat',
        reset: 'Réinitialiser',
        gas_used: 'Gaz utilisé',
        account: 'Compte',
        contract: 'Contrat',
        transfers_title: 'Transferts { type }:',
        loading_transfers: 'Chargement des transferts',
        loading_approvals: 'Chargement des permissions',
        erc20_transfers: 'Transferts ERC20',
        erc721_transfers: 'Transferts ERC721',
        erc1155_transfers: 'Transferts ERC1155',
        tokens: 'Jetons',
        created_at_trx: 'Création',
        by_address: 'Par',
        number_used_once: 'Nombre utilisé une fois (nonce)',
        native_account: 'Compte natif',
        balance: 'Solde',
        view_source_prompt: 'Ce contrat à été vérifié. Vous pouvez consulter son code source et metadonnées dans l\'onglet \'contrat\'',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } TLOS',
        couldnt_retreive_metadata_for_address: 'Impossible de récupérer les metadonnées pour { address }: { message }',
        transaction_details: 'Détails de la transaction',
        transaction_not_found: 'Non trouvé: { hash }',
        general: 'Général',
        details: 'Détails',
        logs: 'Logs',
        internal_txns: 'Transactions Internes',
        transaction_hash: 'Hash de la transaction ',
        click_to_change_date_format: 'Cliquer pour changer le format de la date',
        block_number: 'Numéro de bloc',
        from: 'Expéditeur',
        to: 'Destination',
        date: 'Date',
        success: 'Succès',
        failure: 'Échec',
        status: 'Statut',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } TLOS',
        error_message: 'Message d\'Erreur',
        contract_function: 'Fonction appelée',
        function_parameters: 'Paramètres de la fonction',
        deployed_contract: 'Contrat Déployé',
        click_to_show_in_wei: 'Cliquez pour voir en wei',
        gas_price_charged: 'Prix du gaz',
        gas_fee: 'Frais de gaz',
        gas_limit: 'Limite de gaz',
        nonce: 'Nonce',
        input: 'Entrée',
        output: 'Sortie',
        value: 'Valeur',
    },
    components: {
        blockoverview: {
            block_height: 'Hauteur du bloc',
            timestamp: 'Horodatage',
            size: 'Taille',
            gas_used: 'Gaz utilisé',
            gas_limit: 'Limite de gaz',
            hash: 'Hachage',
            parent_hash: 'Hachage parent',
            nonce: 'Nonce',
            extra_data: 'Données supplémentaires',
            extra_data_tooltip: 'Données supplémentaires incluses dans le bloc',
            block_height_tooltip: 'Aussi appelé "Numéro de bloc". La hauteur du bloc représente la longueur de la chaîne de blocs, augmentant de un après l\'ajout d\'un nouveau bloc',
            timestamp_tooltip: 'Le moment et la date de production du bloc',
            transactions_tooltip: 'Le nombre de transactions dans le bloc. Les transactions internes sont des transactions qui se produisent à la suite de l\'exécution d\'un contrat et incluent une valeur TLOS',
            size_tooltip: 'la quantité de données dans le bloc, déterminée par la limite de gaz',
            gas_used_tooltip: 'La quantité de gaz utilisée dans le bloc',
            gas_limit_tooltip: 'La limite de gaz pour toutes les transactions dans le bloc',
            nonce_tooltip: 'La valeur utilisée lors du minage pour atteindre un consensus sur la Preuve de Travail pour le bloc',
            hash_tooltip: 'Le hachage de l\'en-tête du bloc',
            parent_hash_tooltip: 'Le hachage du bloc parent',
            count_transactions: '{count} transactions',
            count_transaction: '1 transaction',
            in_this_block: 'dans ce bloc',
            transactions: 'Transactions',
        },
        gas_limit_tooltip: 'La quantité maximale de gaz qui peut être dépensée pour cette transaction',
        gas_used_tooltip: 'La quantité de gaz qui a été dépensée pour cette transaction',
        known_tokens: 'Jetons connus',
        other_tokens: 'Jetons inconnus',
        no_balances_found: 'Aucun jetons erc20 trouvés pour cette adresse',
        internal_txns: 'Transactions Internes',
        n_internal_txns: '{ amount } transactions internes',
        none: 'Aucun',
        verify_prompt: 'Ce contrat n\'a pas encore été vérifié. Voulez vous envoyer le code et metadata du contrat afin de le vérifier maintenant ?',
        verify_contract: 'Verifiez le contrat',
        search_evm_address_failed: 'La recherche d\'une addresse EVM lié au compte natif { accountName } a échouée. Vous pouvez en créer une en vous connectant sur wallet.telos.net',
        unknown_web3_login_type: 'Type de login web3 inconnu: { provider }',
        unknown_evm_login_provider: 'Fournisseur de login EVM inconnu: { provider }',
        unknown_native_login_provider: 'Fournisseur de login natif inconnu: { provider }',
        connect_wallet: 'Connectez votre portefeuille',
        view_address: 'Voir l\'adresse',
        disconnect: 'Déconnexion',
        disable_wallet_extensions: 'Désactiver l\'extension portefeuille ou définisez le portefeuille Brave comme portefeuille par défaut dans les paramètres portefeuille de votre navigateur pour utiliser le portefeuille Brave',
        enable_wallet_extensions: 'Activez l\'extension  MetaMask et définisez le défaut à `préferer les extensions` dans les paramètres portefeuille de votre navigateur pour utiliser le portefeuille Metamask',
        evm_wallets: 'Portefeuilles EVM',
        advanced: 'Avancé',
        continue_on_metamask: 'Continuez avec Metamask',
        text1_native_wallets: 'Portefeuilles natifs pour',
        text2_advanced_users: 'utilisateurs avancés',
        text3_or_to_recover_assets: 'ou pour récuperer des jetons envoyés à une adresse EVM lié à un compte natif',
        copy_to_clipboard: 'Copiez { text } dans le presse-papiers',
        latest_block: 'Dernier Bloc',
        price_sources: 'Données obtenues de Coingecko, CoinMarketCap si disponible sinon des échanges décentralisés présents sur Telos EVM',
        marketcap_sources: 'Données obtenues de Coingecko ou CoinMarketCap',
        usd_marketcap: 'Capitalisation USD',
        usd_price: 'Prix USD',
        usd_value: 'Valeur USD',
        tlos_price: 'Prix TLOS',
        gas_price: 'Prix gaz',
        gas_price_tlos: '(Gas Price * Gas Used) in TLOS',
        gas_price_gwei: 'Gas Price in gwei',
        click_to_expand: 'Cliquez pour étendre la signature de la fonction',
        click_to_fold: 'Cliquez pour réduire',
        search_evm_failed: 'La recherche d\'une adresse EVM lié au compte natif { search_term } à échoué.',
        search_failed: 'La recherche à échouée, veuillez saisir des mots clés de recherche correctes.',
        add_to_metamask: 'Ajoutez { symbol } à MetaMask',
        tx_hash: 'Transaction',
        block: 'Bloc',
        date: 'Date',
        method: 'Méthode',
        to_interacted_with: 'À',
        value_transfer: 'Valeur / Transfert',
        value: 'Valeur',
        token: 'Jeton',
        unknown_precision: 'Précision inconnue',
        click_to_change_format: 'Clicquez pour changer le format',
        func_exed_based_on_dec_data: 'Fonction executée à partir des données décodés',
        balance: 'Solde',
        error_fetching_balance: 'erreur lors de l\'obtention du solde',
        launch_metamask_dialog_to_add: 'Démarrer le dialogue Metamask pour ajouter{ symbol }',
        search_hints: 'Transaction,Adresse,Bloc',
        no_provider_found: 'Plus d\'un fournisseur de portefeuille est actif, désactivez les fournisseurs en trop. Si cela ne fonctionne toujours pas votre portefeuille EVM n\'est peut être pas supporté.',
        copied: 'Copié',
        copy_to_clipboard_failed: 'La copie sur le presse-papiers à échoué',
        gwei: 'Gwei',
        failed_to_fetch_transactions: 'Erreur lors du chargement des transactions.',
        failed_to_parse_transaction: 'Echec de l\'analyse des données de la transaction. Erreur: { message }',
        executed_based_on_decoded_data: 'Fonction executé à partir des données d\'entrée décodé. Pour les fonctions non identifiés, l\'ID de méthode est affiché à la place.',
        unsupported_token_type: 'Type de jeton non supporté: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Statut',
        nonce: 'Nonce',
        from: 'De',
        to: 'À',
        approvals: {
            token_id: 'ID Jeton',
            approved: 'Approuvé',
            approvals_granted_title: 'Permissions ERC:',
            login_account: 'Veuillez vous connecter à cette addresse à l\'aide de votre portefeuille afin de consulter ses permissions.',
            approval_text: 'Nous allons définir le montant des permissions séléctionés à 0. Ceci requiert une signature avec votre portefeuille.',
            type: 'Type',
            delete: 'Supprimer',
            delete_all: 'Supprimer tout',
            unselect_all: 'Tout déséléctionner',
            cancel: 'Annuler',
            remove_approval: 'Supprimer',
            removal_approval: 'Supprimer la permission',
            unselect_all_approvals: 'Déséléctionner les permissions',
            infinite: 'Infini',
            infinite_tooltip: 'Permission plus grande que la totalité des jetons en existence',
            select: 'Selectionnez la permission',
            unselect: 'Déséléctionner la permission',
            update: 'Mise à jour permission(s)',
            update_description: 'Saisissez le nouveau montant de la permission. Ceci requiert une signature avec votre portefeuille.',
            removal_approvals: 'Supprimer toutes les permissions',
            removal_selected_approvals: 'Supprimer toutes les permissions séléctionnées',
            update_failed: 'Echec lors de la mise à jour de la ou des permissions',
            update_success: 'Permission à {spender} pour {contract} a bien été mise à jour',
            spender: 'Dépensier',
            amount: 'Montant',
        },
        nfts : {
            show_without_metadata: 'Voir les NFTs sans metadata',
            id: 'ID Jeton',
            name: 'Nom',
            collection: 'Collection',
            nfts: 'NFTs',
            contract: 'Contrat NFT',
            metadata: 'Meta',
            minter: 'Cré par',
            owner: 'Propriétaire',
            minted: 'Bloc',
            image: 'Image',
            media: 'Media',
            attributes: 'attribut',
            ipfs: 'Obtenir de IPFS',
            consult_collection: 'Consultez la collection',
            consult_metadata: 'Consultez les metadonnées',
            consult_media: 'Consultez le media',
        },
        holders : {
            show_system_contracts: 'Voir les contrats systèmes',
            holder: 'Détenteur',
            balance: 'Solde',
            telos_supply: 'Parts Telos EVM',
            global_supply: 'Parts globales',
            updated: 'Mis à jour',
        },

        transaction: {
            in: 'dépot',
            out: 'envoi',
            load_error: 'Erreur de chargement des transactions',
            consult_collection: 'Consultez la collection',
            consult_metadata: 'Consultez les metadonnées',
            consult_media: 'Consultez le media',
            show_short: 'Voir format court',
            show_total: 'Voir le total',
            show_wei: 'Voir en wei',
            value_uint256: 'Valeur (uint256) : ',
            tlos_transfer: 'TLOS Transfer',
            contract_deployed: 'Contrat Deployé',
            native_deposit: 'Dépôt de Telos Natif',
            native_withdraw: 'Transfert à Telos Natif',
            unknown: 'Inconnu',
            contract_deployment: 'Deploiement du contrat',
            no_internal_trxs_found: 'Aucune transaction interne trouvée',
            human_readable: 'Lisible par l\'homme',
            no_logs_found: 'Aucun log trouvé',
            verify_related_contract: 'Vérifiez les contrats relatifs à chaque logs pour voir sa version lisible par l\'homme',
            failed_to_retrieve_contract: 'Impossible de récupérer le contrat à l\'adresse { address }',
            trx_hash: 'Hash de Transaction',
            trx_hash_tooltip: 'L\'identifiant unique de la transaction.',
            block: 'Bloc',
            block_tooltip: 'Le numéro de bloc dans lequel cette transaction a été incluse.',
            status: 'Statut',
            status_tooltip: 'Indique si la transaction a été réussie, échouée, ou est en attente',
            timestamp: 'Horodatage',
            timestamp_tooltip: 'Le moment où la transaction a été confirmée.',
            trx_action: 'Action de la Transaction',
            trx_action_tooltip: 'L\'opération effectuée par cette transaction, comme un transfert ou l\'exécution d\'un contrat.',
            from: 'De',
            from_tooltip: 'L\'adresse initiant la transaction.',
            to: 'À',
            to_tooltip: 'L\'adresse destinataire de la transaction.',
            value: 'Valeur',
            value_tooltip: 'Le montant de cryptomonnaie transféré dans cette transaction.',
            gas_fee: 'Frais de Transaction',
            gas_fee_tooltip: 'Les frais totaux payés pour cette transaction, en TLOS et USD.',
            gas_price: 'Prix du Gaz',
            gas_price_tooltip: 'Le prix par unité de gaz payé pour la transaction.',
            more_details: 'Plus de Détails',
            show_more_details: 'cliquez pour afficher plus',
            show_less_details: 'cliquez pour afficher moins',
            gas_limit_n_usage: 'Limite de Gaz & Utilisation par Txn',
            gas_limit_n_usage_tooltip: 'La quantité maximale de gaz qui était autorisée pour la transaction, et la quantité réelle de gaz utilisée.',
            nonce: 'Nonce',
            nonce_tooltip: 'Un nombre séquentiel lié à chaque transaction faite par la même adresse, assurant que les transactions sont traitées dans l\'ordre.',
            position_in_block: 'Position dans le Bloc',
            position_in_block_tooltip: 'La position de cette transaction dans le bloc.',
            input: 'Entrée',
            input_tooltip: 'Données envoyées avec la transaction, généralement utilisées pour les interactions avec les contrats.',
        },
        inputs: {
            incorrect_address_array_length: 'Le tableau doit contenir { size } adresses',
            incorrect_booleans_array_length: 'Le tableau doit contenir { size } booléens',
            incorrect_bytes_array_length: 'Le tableau doit contenir { size } bytes',
            odd_number_of_bytes: 'Il devrait y avoir un nombre pair de caractères d\'octet',
            incorrect_sigint_array_length: 'Le tableau doit contenir { size } entiers signés',
            incorrect_strings_array_length: 'Le tableau doit contenir { size } chaînes de caractères',
            incorrect_unsigint_array_length: 'Le tableau doit contenir { size } entiers non signés',

            invalid_address_array_string: 'La valeur saisie ne represente pas un tableau d\'adresses',
            invalid_booleans_array_string: 'La valeur saisie ne represente pas un tableau de booléens',
            invalid_bytes_array_string: 'La valeur saisie ne represente pas un tableau de bytes',
            invalid_sigint_array_string: 'La valeur saisie ne represente pas un tableau d\'entiers signés',
            invalid_strings_array_string: 'La valeur saisie ne represente pas un tableau de chaîne de caractères',
            invalid_unsigint_array_string: 'La valeur saisie ne represente pas un tableau de d\'entiers non signés',

            invalid_address_length: 'Une adresse doit faire exactement 40 caractères, sans compter le "0x"',
            invalid_address_start: 'Une adresse doit débuter par 0x',
            invalid_address_characters: 'Cette entrée contient des caractères invalides',
            readonly: 'Ce champ est en lecture seule',
            required: 'Ce champ est requis',
            too_large: 'La valeur maximum pour int{ size } est { max }',
            too_small: 'La valeur minimum pour int{ size } est { min }',
            too_large_pow2: 'La valeur maximum pour int{ size } est 2^{ size } - 1',
            too_small_pow2: 'La valeur minimum pour int{ size } est -(2^{ size }) + 1',
            too_large_unsigint: 'La valeur maximum pour uint{ size } est 2^{ size } - 1',
            no_negative_unsigint: 'La valeur pour uint{ size } ne peut pas être négative',
            invalid_signed_integer: 'Entier signé non valide',
            invalid_unsigint: 'L\'entrée doit être un entier non signé valide',
            str_input_placeholder: '["une valeur", ... , "valeur final"]',
            str_input_hint: 'Les guillemets dans les chaînes de caractères doivent être échappés (\\")',
            address_placeholder: 'Adresse commençant par 0x',
            address_label: '{ label } (adresse)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Statut',
            checked_at: 'Vérifié à',
            task: 'Tâche',
            message: 'Message',
            category: 'Catégorie',
            block_height: 'Bloc',
            latency: 'Latence',
            success: 'Succès',
            info: 'Info',
            alert: 'Alerte',
            error: 'Erreur',
            click_to_change_format: 'Cliquer pour changer de format',
        },
        contract_tab: {
            abi_loaded_from_interface: 'Cet ABI générique a été chargé à l\'aide de supportsInterface() de l\'IEP-165. Certaines fonctions listées peuvent donc ne pas être implémentés. Vérifiez le contrat pour intégagir avec en utilisant l\'ABI complet.',
            copy_abi_to_clipboard: 'Copier l\'ABI du contrat sur le presse-papiers',
            enter_amount: 'Séléctionnez un nombre de décimales et saisissez un montant qui sera injecté pour vous dans la fonction en tant que uint256',
            result: 'Résultat',
            view_transaction: 'Voir la transaction',
            code: 'Code',
            bytecode: 'Bytecode',
            read: 'Lire',
            write: 'Ecrire',
            amount: 'Montant',
            value: 'Valeur',
            custom_decimals: 'Decimales personalisés',
            custom: 'Personalisé',
            unverified_contract_source: 'Ce contrat n\'a pas été vérifié.',
            click_here: 'Cliquez ici',
            upload_source_files: 'pour envoyer le fichier source et vérifier votre contrat.  ' +
                'Alternativement, vous pouvez intéragir avec le contrat en utilisant un ABI arbitraire:',
            abi_autoloaded: 'En attendant, vous pouvez intéragir avec le contrat en utilisant notre ABI générique chargé automatiquement.',
            choose_abi: 'Alternativement, vous pouvez intéragir avec le contrat en utilisant soit un de nos ABIs génériques ou bien un ABI JSON personalisé:',
            use_erc20_abi: 'Utiliser l\'ABI ERC20',
            use_erc721_abi: 'Utiliser l\'ABI ERC721',
            use_erc1155_abi: 'Utiliser l\'ABI ERC1155',
            abi_from_json: 'ABI depuis JSON',
            paste_abi_json_here: 'Coller votre ABI JSON ici',
            abi_json_preview: 'ABI JSON prévisualisation',
            provided_abi_invalid: 'L\'ABI founni n\'est pas valide',
            provided_json_invalid: 'Le JSON fourni n\'est pas valide',
            read_functions: 'Fonctions de lecture',
            write_functions: 'Fonctions de d\'écriture',
            unverified_contract: 'Contract non verifié',
            verified_contract: 'Contract Verifié',
        },
        header: {
            address_copied: 'Adresse copiée',
            address_not_found: 'La recherche d\'une adresse EVM lié à au compte natif { account } a échoué.',
            api_documentation: 'Documentation API',
            blockchain: 'Blockchain',
            blocks: 'Blocs',
            connect_wallet: 'Connecter Portefeuille',
            copy_address: 'Copier l\'adresse',
            csv_export: 'Exportation CSV',
            developers: 'Développeurs',
            disconnect_wallet_tooltip: 'Déconnecter le portefeuille',
            gas: 'Gas',
            goto_address_details: 'Voir les détails de l\'adresse',
            health_monitor: 'Moniteur de Santé',
            home: 'Accueil',
            more: 'Plus',
            network: 'Réseau',
            open_language_switcher: 'Ouvrir le sélécteur de language',
            search_failed: 'La recherche a échoué, veuillez saisir des mots clés de recherche corrects.',
            search_placeholder: 'Adresse, Tx, Bloc',
            select_language: 'Choisir votre language',
            switch_to_dark_theme: 'Passer au thème sombre',
            switch_to_light_theme: 'Passer au thème clair',
            system_token_price: 'Prix du {token}',
            telos_ecosystem: 'Écosystème Telos',
            telos_evm_logo_alt: 'Logo de Telos EVM',
            telos_wallet: 'Portefeuille Telos',
            transactions: 'Transactions',
            verify_contract_sourcify: 'Vérifier le Contrat (Sourcify)',
            view_other_networks: 'Voir d\'autres réseaux',
        },
    },
    global: {
        all: 'Tous',
        true: 'oui',
        false: 'non',
        close: 'Fermer',
        toggle_fullscreen: 'Passer en mode plein écran',
        name: 'Nom',
        symbol: 'Symbole',
        show_table: 'Version tableau',
        show_grid: 'Version grille',
        records_per_page: 'Entrées par page:',
        max_decimals_reached: 'Veuillez utiliser au maximum { max } décimales',
        erc20_token: 'Jeton ERC20',
        erc721_token: 'Jeton ERC721',
        sign: 'Signer',
        hours: 'heures',
        wallet_response: 'En attente d\'une réponse de votre portefeuille',
        minutes: 'minute(s)',
        days: 'jour(s)',
        and: 'et',
        unknown: 'inconnu(e)',
        data_behind_by: 'Les données affichés sont en retard de',
        not_synced: 'L\'indexeur n\'est pas synchronisé',
        try_reloading: 'Vous pouvez rafraîchir la page pour réesayer',
        error: 'Erreur',
        async_error_description: 'Désolé ! Un erreur est survenue lors de la requête d\'une ressource. Assurez vous que votre connection internet fonctionne et réessayez. Si cela ne marche toujours pas, contactez nous directement sur nos canaux Telegram.',
        language: 'Language',
        cancel: 'Annuler',
        updated: 'Mis à jour',
        action: 'Action',
        ok: 'Ok',
        expand: 'Voir plus',
        dismiss: 'Rejeter',
        internal_error: 'Erreur interne',
        empty_block: 'Le bloc est vide',
        empty_block_description: 'Ce bloc ne comporte aucune transaction. Essayez de consulter un autre bloc',
    },
    layouts: {
        health_status: 'Statut santé',
        stake_telos: 'Stakez vos TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
    notification: {
        success_title_trx: 'Succès',
        success_title_copied: 'Copié',
        success_message_trx: 'Votre transaction a été traitée. Pour obtenir des informations détaillées, cliquez sur le lien ci-dessous.',
        success_message_revoking: 'La révocation de l\'allocation de <b>{symbol}</b> pour <b>{address}</b> a été effectuée avec succès.',
        success_message_copied: 'Le nom de votre compte a été copié dans le presse-papiers.',
        success_see_trx_label: 'Voir Transaction',
        dismiss_label: 'Rejeter',
        error_title: 'Oups !',
        error_title_disconnect: 'Pas de connexion Internet',
        error_message_disconnect: 'Désolé, il semble que vous ne soyez pas connecté à Internet. Veuillez vérifier votre connexion réseau et réessayer.',
        error_see_details_label: 'Voir Détails',
        error_details_title: 'Détails de l\'Erreur',
        neutral_message_sending: 'Envoi de <b>{quantity}</b> à <b>{address}</b>',
        neutral_message_revoking: 'Révocation de l\'allocation de <b>{symbol}</b> pour <b>{address}</b>',
        neutral_message_wrapping: 'Conversion de <b>{quantity} {symbol}</b> en ERC20',
        neutral_message_unwrapping: 'Restauration de <b>{quantity} {symbol}</b>',
        neutral_message_withdrawing: 'Retrait de <b>{quantity} {symbol}</b>',
        dont_show_message_again: 'Ne plus afficher ce message',
        error_message_sending: 'Une erreur s\'est produite lors de l\'envoi de <b>{quantity}</b> à <b>{address}</b>',
        error_message_revoking: 'Une erreur s\'est produite lors de la révocation de l\'allocation de <b>{symbol}</b> pour <b>{address}</b>',
        error_message_wrapping: 'Une erreur s\'est produite lors de la conversion de <b>{quantity} {symbol}</b> en ERC20',
        error_message_unwrapping: 'Une erreur s\'est produite lors de la restauration de <b>{quantity} {symbol}</b>',
        error_message_withdrawing: 'Une erreur s\'est produite lors du retrait de <b>{quantity} {symbol}</b>',
        error_message_custom_call: 'Une erreur s\'est produite lors de l\'appel à <b>{name}</b> avec <b>{params} paramètres</b>',
        error_message_custom_call_send: 'Une erreur s\'est produite lors de l\'appel à <b>{name}</b> avec <b>{params} paramètres</b> et l\'envoi de <b>{quantity} {symbol}</b>',
        neutral_message_custom_call: 'Appel à <b>{name}</b> avec <b>{params} paramètres</b>',
        neutral_message_custom_call_send: 'Appel à <b>{name}</b> avec <b>{params} paramètres</b> et envoi de <b>{quantity} {symbol}</b>',
    },
    antelope: {
        evm: {
            error_unpredictable_gas_limit: 'Impossible d\'estimer la limite de gaz pour cette transaction',
            error_transaction_canceled: 'Vous avez annulé l\'action',
        },
    },
    temporal: {
        telos_cloud_discontinued_title: 'Importante',
        telos_cloud_discontinued_message_title: 'Attention aux utilisateurs : L\'option de compte Telos Cloud Wallet sera supprimée.',
        telos_cloud_discontinued_message_body: 'L\'option du compte Telos Cloud Wallet (ORE ID via Google) pour se connecter et signer des transactions sera supprimée après le 31 décembre. Si vous utilisez le Telos Cloud Wallet pour accéder à votre compte, veuillez transférer vos actifs vers un autre portefeuille avant cette date. <strong>Ce changement n\'affecte pas les utilisateurs qui accèdent à leurs comptes via Metamask, WalletConnect, Anchor ou d\'autres méthodes de connexion.</strong>',
    },
};
