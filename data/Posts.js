const posts = [
    {
        id: 1,

        desription: 'His and hers',

        date: '2021-03-02',

        likes: 230,

        commments: 24,

        user: {
            name: 'zuck',
            avatarImg: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-19/177219615_1728341124004802_3178671336629535217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Vmyj3MEsWtgAX9S-f8I&edm=APU89FABAAAA&ccb=7-5&oh=00_AT8ceakSbh_MNvSZ7Wsk_UZfpoQL0hRt7a2HPiu5D1hQjQ&oe=63348787&_nc_sid=86f79a',
            isVerified: true
        },
        postImg: 'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/308031900_811744306751298_6255395817567018293_n.webp?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PgmW2r3l0xwAX8h6ikB&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMjIzMTM3MzQ4MjUxMjY5NQ%3D%3D.2-ccb7-5&oh=00_AT99Mf0HgqHTlbXUwZU8OV3ljwPMmKfc5urjJOQ2p5Yigg&oe=6335539F&_nc_sid=30a2ef',
        imgs: [
            'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/308031900_811744306751298_6255395817567018293_n.webp?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PgmW2r3l0xwAX8h6ikB&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMjIzMTM3MzQ4MjUxMjY5NQ%3D%3D.2-ccb7-5&oh=00_AT99Mf0HgqHTlbXUwZU8OV3ljwPMmKfc5urjJOQ2p5Yigg&oe=6335539F&_nc_sid=30a2ef',
            'https://instagram.fsaw3-1.fna.fbcdn.net/v/t51.2885-15/308031900_811744306751298_6255395817567018293_n.webp?stp=dst-jpg_e35_p320x320&_nc_ht=instagram.fsaw3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PgmW2r3l0xwAX8h6ikB&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzMjIzMTM3MzQ4MjUxMjY5NQ%3D%3D.2-ccb7-5&oh=00_AT99Mf0HgqHTlbXUwZU8OV3ljwPMmKfc5urjJOQ2p5Yigg&oe=6335539F&_nc_sid=30a2ef',

        ]
    },
    {
        id: 2,

        desription: 'Instagram is a photo and video sharing social networking service founded in 2010 by Kevin Systrom and Mike Krieger, and later acquired by American company Facebook Inc.',

        date: '2021-03-02',

        likes: 230,

        commments: 24,

        user: {
            name: 'ilhan_ers',
            avatarImg: 'https://scontent.cdninstagram.com/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=kN7LTZT3V6IAX81olyX&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT_EBNaptFaroaqOkhC3aaBs-wMb2Z-h-doO8eFs9y1-_Q&oe=62F3A327&_nc_sid=978cb9',
            isVerified: false
        },

        postImg: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/296766891_323522056582349_8383197595281608881_n.jpg?stp=dst-jpg_e35_p320x320&cb=2d435ae8-326fec31&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Fdn8nVlqDTQAX-dqbw-&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg5NTE5NjE3Njc0NzkyMDA1Mg%3D%3D.2-ccb7-5&oh=00_AT_o8yGO0QWWHud9B8zXfflVXwSXBD1Zst3L4C-w3_8liw&oe=62F3626A&_nc_sid=a0bfed',

    },
    {
        id: 1,

        desription: 'His and hers',

        date: '2021-03-02',

        likes: 230,

        commments: 24,

        user: {
            name: 'zuck',
            avatarImg: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-19/177219615_1728341124004802_3178671336629535217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=HTXALL2XY5IAX8Qgcju&edm=AGeOuZUBAAAA&ccb=7-5&oh=00_AT84nt7GH55mQVXCCgBFD0avbfbPwRi09f0lGZVibbEawQ&oe=62F34547&_nc_sid=924bfa',
            isVerified: true
        },
        postImg: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/296358066_759669115078930_5718512020580893322_n.webp?stp=dst-jpg_e35_s320x320&cb=2d435ae8-326fec31&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=XplLnNYEryYAX92kaB9&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT-Z52LxhZzkS4E2fLbXRvOUBk3q05SQNOSEJl9wnfuRsA&oe=62F3DB8E&_nc_sid=8fd12b',


    },
    {
        id: 3,

        desription: 'Instagram is a photo and video sharing social networking service founded in 2010 by Kevin Systrom and Mike Krieger, and later acquired by American company Facebook Inc.',

        date: '2021-03-02',

        likes: 230,

        commments: 24,

        user: {
            name: 'ilhan_ers',
            avatarImg: 'https://scontent.cdninstagram.com/v/t51.2885-19/240936026_508945976807276_3878467107109739721_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=kN7LTZT3V6IAX81olyX&edm=APs17CUBAAAA&ccb=7-5&oh=00_AT_EBNaptFaroaqOkhC3aaBs-wMb2Z-h-doO8eFs9y1-_Q&oe=62F3A327&_nc_sid=978cb9',
            isVerified: false
        },

        postImg: 'https://scontent-del1-1.cdninstagram.com/v/t51.2885-15/296766891_323522056582349_8383197595281608881_n.jpg?stp=dst-jpg_e35_p320x320&cb=2d435ae8-326fec31&_nc_ht=scontent-del1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Fdn8nVlqDTQAX-dqbw-&edm=AI8qBrIBAAAA&ccb=7-5&ig_cache_key=Mjg5NTE5NjE3Njc0NzkyMDA1Mg%3D%3D.2-ccb7-5&oh=00_AT_o8yGO0QWWHud9B8zXfflVXwSXBD1Zst3L4C-w3_8liw&oe=62F3626A&_nc_sid=a0bfed',

    },
]

export default posts;