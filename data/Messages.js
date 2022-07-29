const messages = [
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    },
    {
        id: 1,

        notification: "3 new messages",

        timestamp: "33m",

        user: {
            name: "Harun Burak Bursa",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/244692226_282680550394602_6025779403371137870_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ZdBuIaAHUe0AX-o7b-o&tn=KRN-Xfh86jfLlR-R&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT-SmgX3mufwMs4GEnvfj_zZdJTwv5d-dQ4MNKxmhwLutg&oe=62E209AF&_nc_sid=195af5"
        },

        isMuted: true
    },
    {
        id: 2,

        notification: "1 new messages",

        timestamp: "2m",

        user: {
            name: "Elif Tuğ",
            userImg: "https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/81461783_1286824234846129_2850211538248138752_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Jga6ECKHSxoAX-ZaFpW&edm=AI8ESKwBAAAA&ccb=7-5&oh=00_AT9imOXlqVDLazOFdRfp8zQXsnz4ch0RmpowPdjkbSavUg&oe=62E290FD&_nc_sid=195af5"
        },

        isMuted: false
    }

]

export default messages;