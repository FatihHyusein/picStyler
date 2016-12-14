let _ = require('lodash');

function question(id) {
    let sampleContent = '--the question content--';
    return {
        id,
        content: `sample-${id}: ${sampleContent}`,
        user_id: id
    }
}

export const questions = _.range(1, 10).map((i)=> question(i));
export function getUser(id) {
    return {
        id,
        name: `user name - ${id}`
    }
}
export function getQuestion(id) {
    if (id === 'not-found') {
        return null
    }
    return question(id)
}


export const profiles = [
    {
        id: '0',
        name: 'Fatih',
        description: 'some looong description blah blah',
        profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/t31.0-8/10861005_921931227831113_5461891713365108654_o.jpg'
    },
    {
        id: '1',
        name: 'Second User',
        description: 'some lsad sd asooong description blah blah',
        profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-0/p75x225/12631362_10204201247110855_6973788636621843225_n.jpg?oh=b01e74f7d9c7ee74ee4ed49825c8dc27&oe=58F7336A'
    },
    {
        id: '2',
        name: 'Fatih',
        description: 'sadpo aspdo aspd oasdipasoi ds',
        profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
    },
    {
        id: 99,
        profileImgUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUZFtJIlYTrlR8TGNZKLhUM3uW3TNVNbM1l4Ns10aQy7qSLutvq6bNiOs",
        name: 'Backend TRUCK',
        description: 'sadpo aspdo aspd oasdipasoi ds'
    }
];


export const tags = [
    {
        id: 1,
        name: 'necke 1',
        imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/t31.0-8/10861005_921931227831113_5461891713365108654_o.jpg',
        price: 25
    },
    {
        id: 2,
        name: 'necke 1',
        imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/t31.0-8/10861005_921931227831113_5461891713365108654_o.jpg',
        price: 25
    },
    {
        id: 3,
        name: 'necke 1',
        imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/t31.0-8/10861005_921931227831113_5461891713365108654_o.jpg',
        price: 25
    },
    {
        id: 4,
        name: 'zz',
        imgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/t31.0-8/10861005_921931227831113_5461891713365108654_o.jpg',
        price: 525
    }
];


export const tagGroups = [
    {
        id: 1,
        name: 'group tag 1',
        tags: [
            tags[0], tags[1]
        ]
    },
    {
        id: 2,
        name: 'shoes',
        tags: [
            tags[2], tags[3]
        ]
    }
];

export let galleryList = [
    {
        id: '0',
        isPublic: true,
        uploader: 'Someone',
        liked: true,
        description: 'some looong description blah blah',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/7b/8c/b1/7b8cb1c5f571ebae231206e83fc75217.jpg',
        social: {
            likes: 5,
            shares: 9,
            comments: [
                {
                    id: 3,
                    name: 'Ivan',
                    text: 'tova e comment',
                    profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
                },
                {
                    id: 4,
                    name: 'van',
                    text: 'tova e comment',
                    profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
                }
            ]
        },
        photograph: {
            name: 'AAA bbb',
            id: 99,
            profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
        },
        tagGroups: tagGroups
    },
    {
        id: 1,
        isPublic: true,
        uploader: 'Ramm',
        liked: false,
        description: 'asd asd asd oaskdjas',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/5e/ed/68/5eed68f9409815baa2cf232393c09d55.jpg',
        social: {
            likes: 5000,
            shares: 88,
            comments: [
                {
                    id: 6,
                    name: 'zizi ivavnn',
                    text: 'tova e comment',
                    profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
                },
                {
                    id: 8,
                    name: 'GOGO',
                    text: 'tova sad asd asd as dasd as ddsa dsa dsq we comment',
                    profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
                }
            ]
        },
        photograph: {
            name: 'AAA bbb',
            id: 99,
            profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
        },
        tagGroups: tagGroups
    },
    {
        id: 2,
        isPublic: false,
        uploader: 'ZZZ',
        liked: false,
        description: 'some looong description blah blah',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/d1/f7/45/d1f745675d8c7ad20e057be26bd73307.jpg',
        social: {
            likes: 0,
            shares: 0,
            comments: []
        },
        photograph: {
            name: 'AAA bbb',
            id: 99,
            profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
        },
        tagGroups: []
    },

    {
        id: 3,
        isPublic: false,
        uploader: 'ZZZ',
        liked: false,
        description: 'some looong description blah blah',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/67/6b/58/676b58338a83c03c07ae7264ebd1bfeb.jpg',
        social: {
            likes: 0,
            shares: 0,
            comments: []
        },
        photograph: {
            name: 'AAA bbb',
            id: 99,
            profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
        },
        tagGroups: []
    },
    {
        id: 4,
        isPublic: false,
        uploader: 'ZZZ',
        liked: false,
        description: 'some looong description blah blah',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/29/c5/56/29c556bf9d171b60d123826984cb29d1.jpg',
        social: {
            likes: 0,
            shares: 0,
            comments: []
        },
        photograph: {
            name: 'AAA bbb',
            id: 99,
            profileImgUrl: 'https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/10354953_979665262059478_8838653060096267035_n.jpg?oh=5c01533c64ca0cb6dbd91af994181964&oe=58B6619C'
        },
        tagGroups: []
    },
];


export const myProfile = {
    profileImgUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQUZFtJIlYTrlR8TGNZKLhUM3uW3TNVNbM1l4Ns10aQy7qSLutvq6bNiOs",
    name: 'Backend TRUCK',
    authToken: 'backend token',
    id: 99
};

export function getProfileById(id) {
    for (let idx = 0; idx < profiles.length; idx++) {
        if (profiles[idx].id == id) {
            return profiles[idx];
        }
    }
}