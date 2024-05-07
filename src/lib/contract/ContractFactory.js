import Contract from 'src/lib/contract/Contract';
import erc20Abi from 'erc-20-abi';
import { erc721Abi, erc1155Abi } from 'src/lib/abi';

export default class ContractFactory {
    buildContract(data) {
        if(!data || !data.address){
            return;
        }
        let verified = false;
        if(typeof data.abi !== 'undefined' && data.abi.length > 0) {
            data.abi = (typeof data.abi === 'string') ? JSON.parse(data.abi) : data.abi;
        } else if(typeof data.metadata !== 'undefined' && data.metadata !== null && data.metadata?.length > 0) {
            let metadata = JSON.parse(data.metadata);
            data.abi = metadata.output.abi;
        }
        if(data.abi && !data.autoloadedAbi){
            verified = true;
        }
        data.autoloadedAbi = false;
        if(!data.abi && !verified && data.supportedInterfaces?.length > 0) {
            if(data.supportedInterfaces.includes('erc20')){
                data.abi = erc20Abi;
                data.autoloadedAbi = true;
            } else if (data.supportedInterfaces.includes('erc721')) {
                data.abi = erc721Abi;
                data.autoloadedAbi = true;
            } else if (data.supportedInterfaces.includes('erc1155')) {
                data.abi = erc1155Abi;
                data.autoloadedAbi = true;
            }
        }
        let properties = (data.calldata) ? JSON.parse(data.calldata) : {};
        if(!data.name){
            if(properties?.name){
                data.name = properties.name;
            } else if(data.metadata) {
                let metadata = JSON.parse(data.metadata);
                if(metadata?.settings?.compilationTarget){
                    data.name = Object.values(metadata?.settings?.compilationTarget)[0];
                }
            }
        }
        return  new Contract({
            address: data.address,
            name: data.name,
            verified: verified,
            creationInfo: {
                creator: data.creator,
                transaction: data.transaction,
                block: data.block,
            },
            supportedInterfaces: data.supportedInterfaces,
            properties: properties,
            nfts: {},
            abi: data.abi,
            autoloadedAbi: data.autoloadedAbi,
        });
    }
    buildEmptyContract(address) {
        const contract = new Contract({
            address: address,
            name: `0x${address.slice(0, 16)}...`,
            verified: false,
            creationInfo: {
                creator: null,
                transaction: null,
                block: null,
            },
            properties: {},
            nfts: {},
            abi: undefined,
        });
        return contract;
    }
}
