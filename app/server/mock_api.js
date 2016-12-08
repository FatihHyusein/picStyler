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
    }
];

export function getProfileById(id) {
    for (let idx = 0; idx < profiles.length; idx++) {
        if (profiles[idx].id == id) {
            return profiles[idx];
        }
    }
}