<template>
    <div class="w-full md:w-3/4 lg:w-2/3 pt-20 mx-auto">
        <h1 class="text-4xl uppercase font-medium">Dupbot</h1>
        <div class="flex justify-center flex-wrap">
            <a class="m-1" href="https://discordbots.org/bot/382289192161640468"><img src="https://discordbots.org/api/widget/status/382289192161640468.svg" alt="Discord Bots" /></a>
            <a class="m-1" href="https://discordbots.org/bot/382289192161640468"><img src="https://discordbots.org/api/widget/servers/382289192161640468.svg" alt="Discord Bots" /></a>
            <a class="m-1" href="https://discordbots.org/bot/382289192161640468"><img src="https://discordbots.org/api/widget/owner/382289192161640468.svg" alt="Discord Bots" /></a>
        </div>
        <div class="flex justify-center">
            <a class="bg-white text-black rounded px-2 py-1 mt-4 mx-1 hover:bg-gray-400 cursor-pointer" href="https://discordapp.com/oauth2/authorize?permissions=2146958591&scope=bot&client_id=382289192161640468">Invite Dupbot</a>
            <a class="bg-white text-black rounded px-2 py-1 mt-4 mx-1 hover:bg-gray-400 cursor-pointer" href="https://discord.gg/5FcKNvk">Support Server</a>
        </div>

        <div class="mt-8">
            <img class="mx-auto w-32" src="/img/dupbot.png">
        </div>

        <div class="text-center mt-8">
            This bot is archived :(
        </div>
    </div>
</template>

<script>
const commands = {
    fun: {
        cat: {
            title: '!cat',
            content: 'Show a cute cat!'
        },
        dog: {
            title: '!dog',
            content: 'Shows a doggo'
        },
        image: {
            title: '!image &lt;query&gt;',
            content: 'use this command to search for a specific image or show a random one',
            example: [
                [
                    'Search for a specific image:',
                    '!image flying fish'
                ], [
                    'Show a random image by leaving the query empty:',
                    '!image'
                ]
            ],
        },
        joke: {
            title: '!joke',
            content: 'Much funny jokes for when you are bored ¯\\_(ツ)_/¯'
        },
        color: {
            title: '!color &lt;RGB|HEX&gt;',
            content: 'Use this command to look up color codes or show a random color',
            example: [
                [
                    'Following formats are supported to look up colors:',
                    '!color 255 0 0', '!color FFFFFF'
                ], [
                    'Request a random color by leaving the query empty:',
                    '!color'
                ]
            ]
        },
        kill: {
            title: '!kill',
            content: 'This is a useless command that is disabled by default, because it will kick the user who invoked it lol'
        },
        btc: {
            title: '!btc',
            content: 'Show the price of bitcoin crypto $$$$$$'
        },
        trigger: {
            title: '!trigger',
            content: 'Trigger your profile picture'
        }
    },
    moderation: {
        settings: {
            title: '!settings',
            content: 'Show the settings for this server'
        },
        permissions: {
            title: '!permissions',
            content: 'Show the command permissions for this server'
        },
        set: {
            title: '!set &lt;setting&gt; &lt;opt&gt; &lt;value&gt;',
            content: 'Helps you to change your server specific settings and permissions for the bot, see setup section for a more details',
            example: [
                [
                    'Change command permissions:',
                    '!set perm ping 2',
                    '0: Disable command<br>1: Everyone<br>2: Moderators<br>3: Server Owner (+ Administrators)'
                ]
            ]
        },
        say: {
            title: '!say &lt;channel&gt; &lt;text&gt;',
            content: 'Say something through the bot, if no channel id or channel name is given the bot will say it in the channel where the command was invoked. The bot will recognize itself where you want to say something.',
            example: [
                [
                    'Other channels',
                    '!say #general Hello I\'m Dupbot',
                    '!say general Hello I\'m Dupbot',
                    '!say 310865351099285505 Hello I\'m Dupbot',
                ], [
                    'Channel where command was used',
                    '!say Hello I\'m Dupbot'
                ]
            ]
        },
        warn: {
            title: '!warn &lt;userid&gt; &lt;reason&gt;',
            content: 'Use this command to warn a member, after 3 warnings within the specified warntime will result in a kick. Look at the setup part to change the warntime.' +
                    ' Warnings will expire themself after this warntime, but will stay stored for the user. To remove warnings look at the \'see\' command.' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To warn a user use the following command:',
                    '!warn 261634894428372992 Don\'t spam',
                    // "!warn Ecstabis Don't spam",
                    '!warn @Ecstabis Don\'t spam'
                ],
            ]
        },
        mute: {
            title: '!mute &lt;userid&gt; &lt;time&gt;(COMING SOON)',
            content: 'Mute a member for a certain time or permanent if no time given. The member won\'t be able to send messages in any text channel.' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.' +
                    '<br>The bot will send a message to the member when the mute is removed.',
            example: [
                [
                    'To mute a member use the following command:',
                    '!mute 261634894428372992 3h',
                    // "!mute Ecstabis 1day",
                    '!mute @Ecstabis 1week'
                ]
            ]
        },
        unmute: {
            title: '!unmute &lt;userid&gt; (COMING SOON)',
            content: 'Remove mute from a member' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To unmute a member use the following command:',
                    '!unmute 261634894428372992',
                    // "!unmute Ecstabis",
                    '!unmute @Ecstabis'
                ]
            ]
        },
        kick: {
            title: '!kick &lt;userid&gt; &lt;reason&gt;',
            content: 'Kick a member from the server, the reason is optional.' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To kick a member use the following command:',
                    '!kick 261634894428372992 Don\'t spam',
                    // "!kick Ecstabis",
                    '!kick @Ecstabis'
                ]
            ]
        },
        softban: {
            title: '!softban &lt;userid&gt; &lt;reason&gt;(COMING SOON)',
            content: 'Kick a member from the server and remove their latest sent messages.' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To softban a member use the following command:',
                    '!softban 261634894428372992 Don\'t spam',
                    // "!softban Ecstabis",
                    '!softban @Ecstabis'
                ]
            ]
        },
        ban: {
            title: '!ban &lt;userid&gt; &lt;reason&gt;',
            content: 'Ban a member from the server, there must be a reason given to ban someone' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To ban a member use the following command:',
                    '!ban 261634894428372992 Don\'t spam',
                    // "!ban Ecstabis Don't spam",
                    '!ban @Ecstabis Don\'t spam'
                ]
            ]
        },
        tempban: {
            title: '!tempban &lt;userid&gt; &lt;time&gt; &lt;reason&gt;(COMING SOON)',
            content: 'Ban a member for a certain time, there mmust be a reason given to tempban someone.' +
                    ' The time must be in days or use a resolvable suffix. When no time suffix or not resolvable suffix is found the standard time will be 1 day' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.' +
                    '<br>The bot will send a message to the member when the temporary ban is removed.',
            example: [
                [
                    'To tempban a member use the following command:',
                    '!tempban 261634894428372992 5days Don\'t spam',
                    // "!tempban Ecstabis 4 Don't spam",
                    '!tempban @Ecstabis 1hour Don\'t spam'
                ]
            ]
        },
        unban: {
            title: '!unban &lt;userid&gt;',
            content: 'Unban a user, when there\'s not id given it will show all banned members with their ID' +
                    '<br><br>The bot will log this event in the log channel if there is one set.' +
                    '<br>The bot will send a message to the member with information about this event.',
            example: [
                [
                    'To unban a user use the following command:',
                    '!unban 261634894428372992',
                    // "!tempban Ecstabis 4 Don't spam",
                ], [
                    'To show all banned users:',
                    '!unban'
                ]
            ]
        },
        note: {
            title: '!note &lt;userid&gt; &lt;content&gt;',
            content: 'Add a note to a member in their file' +
                    '<br><br>The bot will log this event in the log channel if there is one set.',
            example: [
                [
                    'To add a note to a member use the following command:',
                    '!note 261634894428372992 Applied for moderator',
                    // "!note Ecstabis Applied for moderator",
                    '!note @Ecstabis Applied for moderator',
                    // "!tempban Ecstabis 4 Don't spam",
                ]
            ]
        },
        see: {
            title: '!see &lt;userid&gt;',
            content: 'Show all moderation events for a member / ex-members (must use an ID in this case). Logs about a member are removeable by replacing the userid with --remove followed by the log index.',
            example: [
                [
                    'To show a logs from a member use the following command:',
                    '!see 261634894428372992',
                    // "!see Ecstabis",
                    '!see @Ecstabis',
                ], [
                    'To remove a log from a member use the following command:',
                    '!see --remove 6'
                ]
            ]
        },
        nuke: {
            title: '!nuke &lt;amount of messages&gt;',
            content: 'Delete messages in a channel, default value is 50. The number must be 2-100. Next release will have a the possibility to remove messages at once.',
            example: [
                [
                    'To remove messages from a channel use the following command:',
                    '!nuke',
                    '!nuke 10'
                ]
            ]
        },
        setrole: {
            title: '!setrole &lt;userid&gt; &lt;role&gt;',
            content: 'Give a role to a member, the order of the parameters must be respected. The role can be the name, the id, or a mention. The user can be an id or mention.',
            example: [
                [
                    'Give a role to a member, other combinations are also possible:',
                    '!setrole 261634894428372992 Member',
                    '!setrole @Ecstabis Member',
                    '!setrole @Ecstabis @Member'
                ]
            ]
        },
        delrole: {
            title: '!delrole &lt;userid&gt; &lt;role&gt;',
            content: 'Remove a role from a member, the order of the parameters must be respected. The role can be the name, the id, or a mention. The user can be an id or mention.',
            example: [
                [
                    'Remove a role from a member, other combination are also possible:',
                    '!delrole 261634894428372992 Member',
                    '!delrole @Ecstabis Member',
                    '!delrole @Ecstabis @Member'
                ]
            ]
        },
        silence: {
            title: '!silence &lt;userid&gt;',
            content: 'Give a member a mute for every voicechat, not to be confused with mute for textchannels.',
            example: [
                [
                    'Silence a member with the following command:',
                    '!silence 261634894428372992',
                    '!silence @Ecstabis',
                ]
            ]
        },
        unsilence: {
            title: '!unsilence &lt;userid&gt;',
            content: 'Removes voicechat mute from a member, not to be confused with unmute for textchannels.',
            example: [
                [
                    'Unsilence a member with the following command:',
                    '!unsilence 261634894428372992',
                    '!unsilence @Ecstabis',
                ]
            ]
        },
        stats: {
            title: '!stats',
            content: 'Show who sent the most messages in the server, can take a while when doing this command for the first time.'
        }
    },
    music: {
        play: {
            title: '!play &lt;song&gt;',
            content: 'Use this command to play a music or a video in the channel designated for the bot.',
            example: [
                [
                    'Playing a song by entering a songs name or youtube-url:',
                    '!play Sam Smith Too Good At Goodbyes',
                    '!play https://www.youtube.com/watch?v=J_ub7Etch2U'
                ], [
                    'Playlists are also supported in the following format <span data-toggle=\'tooltip\' title=\'Make sure to be on the playlist overview page\' class=\'fas fa-info-circle\'>:',
                    '!play https://www.youtube.com/playlist?list=PLFgquLnL59anODTX1UCzrlrQGO3gfvg97'
                ]
            ]
        },
        skip: {
            title: '!skip',
            content: 'Use this command to skip the song that is currently playing.',
            example: [
                [
                    'Skip a single song:',
                    '!skip',
                ], [
                    'Add the keyword playlist to skip a playlist:',
                    '!skip playlist'
                ], [
                    'To remove all songs from the queue use the following command: (COMING SOON)',
                    '!skip all'
                ]
            ]
        },
        queue: {
            title: '!queue',
            content: 'Show all in songs in the queue'
        }
    },
    utility: {
        help: {
            title: '!help &lt;command&gt;',
            content: 'Show all availabe commands for the server or how to use a specific command. There will be a url linking to this page for more information about a command.',
            example: [
                [
                    'Show all available commands:',
                    '!help'
                ], [
                    'Get the syntax for a certain command by adding the command name:',
                    '!help kick',
                ]
            ]
        },
        invite: {
            title: '!invite',
            content: 'The bot will send a DM with the invite URL for the bot'
        },
        ping: {
            title: '!ping',
            content: 'Pong'
        },
        serverinfo: {
            title: '!serverinfo',
            content: 'This command will show a summary of the server. How many people there are in the server, how much of them online are, server location, server info and other details.'
        },
        botinfo: {
            title: '!botinfo',
            content: 'Shows some info about the bot'
        },
        joindate: {
            title: '!joindate &lt;userid&gt;',
            content: 'Get the join date of a member in the guild',
            example: [
                [
                    `You can get the joindate by using the userid (Recommended ${('Do this to avoid other people getting mentioned without a reason, which can result in a ban from the server')}) or mention the member:`,
                    '!joindate 261634894428372992',
                    '!joindate @Ecstabis'
                ]
            ]
        },
        iam: {
            title: '!iam &lt;rolename&gt;',
            content: 'Assign yourself a role by using this command. You can only assign the roles the server moderators set up',
            example: [
                [
                    'To list all available roles you can assign yourself leave the rolename black:',
                    '!iam'
                ], [
                    `You can use the rolename (Recommended ${('Do this to avoid other people getting mentioned without a reason, which can result in a ban from the server')}), the role-id or mention the role to assign it to you`,
                    '!iam Member',
                    '!iam 368564612721016832',
                    '!iam @Member <b>(DO NOT USE THIS)</b>'
                ]
            ]
        },
        prefix: {
            title: '!prefix',
            content: 'Show the server specific prefix if their is one set.'
        },
        getroles: {
            title: '!getroles',
            content: 'Shows all your roles if you\'re to lazy to click.'
        },
        // graphs: {
        // 	title: "!graphs <timeframe> (BROKEN)",
        // 	content: "'!graphs' will show how much people join and leave the server everyday (really helpfull to see if your advertising is working good)<br>'!graphs 2017-12-30 now' will show the stats in this timeframe"
        // },
        remindme: {
            title: '!remindme &lt;time&gt; &lt;\'text to remind you about between quotes\'&gt;',
            content: 'Create a reminder to remind you to do stuff, this can be for a minute, for a day or even next year. When the parameters are left empty, the bot will use a default date (1day) and/or title. Make sure to put your title between quotes or the bot will ignore it.<br>The bot recognizes most abbreviations.',
            example: [
                [
                    'The order of the parameters don\'t matter:',
                    '!remindme 4days 3hours "Look up cute kitties"',
                    '!remindme "Is discord still alive?" 1 year 2months 4days 7h  3min 4s'
                ], [
                    `Date and time strings are also supported in the following formats, the order still doesn't matter ${('When using time, it will be most likely not be in your timezone (UTC+1)')}:`,
                    '!remindme 2018-1-18 "Grocery shopping"',
                    '!remindme 11:25 "Eat food"',
                    '!remindme 11:25:25 "Eat food at a very specific time"',
                    '!remindme 2018-1-18 11:25 "Or in combination"'
                ]
            ]
        }
    }
};

console.log(commands);

export default {

};
</script>
