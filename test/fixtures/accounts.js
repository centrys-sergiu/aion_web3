
let accounts = [{
    address: '0xa0202797a7aff86fec1a5d8b7cacea276de5bcfc2e8b14878c9ba48d7d5330a0',
    checksumAddress: '0xa0202797A7aff86FEc1a5D8B7cacEa276dE5bCfc2e8B14878C9BA48d7D5330A0',
    privateKey: '0x6df86a106f599c78ab9b2ad593b2983038edf706a52b24bfa895b49066a7f2a03ddfb8596435b9530b5e635736c801c1403578b85e582d98dd7a322ddfb1e4c1',
    password: 'account0',
    message: 'account 0: aion-pub-sig --- vvv',
    message: 'hello world!',
    signature: '0x3ddfb8596435b9530b5e635736c801c1403578b85e582d98dd7a322ddfb1e4c1c1c3fdf258c669e30a6cbbeaa04ab9641d6ba831bb3522a7b418dbdeefa7802cc6527fc28b20ae7448cf78503bc475db1778a9bd9c03f82e861e1877e2557908',
    transaction: {
        type: 1,
        timestamp: 1536305330896000,
        nonce: 0,
        gasPrice: "20000000000",
        gas: 21000,
        // account 1
        to: '0xa09d19c066f341220d914414c42e5e796e7e4daf83a9abf4581b1670403bbd15',
        value: "1000000000",
        data: ""
    },
    rawTransaction: '0xf8a580a0a09d19c066f341220d914414c42e5e796e7e4daf83a9abf4581b1670403bbd158a313030303030303030308087057542f583bc8082520888000002000000000001b8603ddfb8596435b9530b5e635736c801c1403578b85e582d98dd7a322ddfb1e4c1e7ef389783eb7bcfc6d2a2e57b9cb1d3d22d0f18ba160cd1e1b10c72a33e67adbaff86d099082053168f58c5b386bef03300d2053a7f27ecbfd8a9569bc6ce0d',
    txAionPubSig: ''
}, {
    address: '0xa09d19c066f341220d914414c42e5e796e7e4daf83a9abf4581b1670403bbd15',
    checksumAddress: '0xa09d19C066f341220d914414C42e5e796e7e4DAf83A9ABf4581B1670403bBD15',
    privateKey: '0x29379825937c50f0e13453673c5083bcf9853ef69ebb129f2db106db4966cf5efe6820305cf2cd29719d7c924fc495542100d5f499d4b758205bee05dd33896b',
    password: 'account1',
    message: 'account 1: aion-pub-sig --- vvv',
    signature: '0xfe6820305cf2cd29719d7c924fc495542100d5f499d4b758205bee05dd33896b96c4914adf1f7f0cfa4cd93e149ef318b194d2398a965a18e64ec3c6473b986a0436912de5cd600dffdc7825b10c6ed0be2df96e9f398c077db582b6e1b4f807',
    transaction: {
        type: 1,
        timestamp: 1536305330896000,
        nonce: 0,
        gasPrice: "0",
        gas: 31853,
        // account 2
        to: '0xa06f640ced8bd31eb9e191887adde74888e9ca31fd8545dae3ae896773ccbc4f',
        value: "0",
        data: ""
    },
    rawTransaction: '0xf89380a0a06f640ced8bd31eb9e191887adde74888e9ca31fd8545dae3ae896773ccbc4f308087057542f583bc80827c6d0001b860fe6820305cf2cd29719d7c924fc495542100d5f499d4b758205bee05dd33896b8e30f6c32e980522d8b98b6afa914b9e6834cd242c06131273fa6d83e7ec26294d126bf7681832ca4ce3ad147e069c5ec3872c3882848d89be566c1aaa410d07',
    txAionPubSig: ''
}, {
    address: '0xa06f640ced8bd31eb9e191887adde74888e9ca31fd8545dae3ae896773ccbc4f',
    checksumAddress: '0xA06f640cED8bd31EB9e191887ADDe74888e9cA31FD8545dae3AE896773CcbC4f',
    privateKey: '0xe6edbf765e724684cacc2c7cc0c8bbac98c1c672b8701108c6e2c2cf25523dec085aa353d4ebd256c4601838714cac4dfd96feee86bc03777247a085b7220ee1',
    password: 'account2',
    message: 'account 2: aion-pub-sig --- vvv',
    signature: '0x085aa353d4ebd256c4601838714cac4dfd96feee86bc03777247a085b7220ee152053b00bc120b67b78ec31d6fd7efadfbd0001e07af4cf4936b2d54a2e3ec84c10b6b8687d134cea9d9dcd4cd97ea40f0064732f0464d7474007458f378f30a',
    transaction: {
        type: 1,
        timestamp: 1536305330896000,
        nonce: 0,
        gasPrice: "234567897654321",
        gas: 2000000,
        to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
        value: "1000000000",
        data: ""
    },
    rawTransaction: '0xf89a8094f0109fc8df283027b6285cc889f5aa624eac1f558a313030303030303030308087057542f583bc80831e848088023456789765432101b860085aa353d4ebd256c4601838714cac4dfd96feee86bc03777247a085b7220ee12eb137076777fbb84bbc9b329b3f5e5cd2b8812ef95a7e6e8aa2092b05e206587dd7b95b79aa705c02485f832218a54e26153519f02dcfa58b31273579ca0a0a',
    txAionPubSig: ''
}]

module.exports = accounts
