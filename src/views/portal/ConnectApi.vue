<template>
    <div class="flex flex-col items-center pt-20 px-12">
        <h1 class="text-4xl">Connect API</h1>
        <div class="flex flex-row justify-end">
            <div @click="update()" class="bg-white text-black rounded py-1 px-2 mt-4 hover:bg-gray-400 cursor-pointer">Update</div>
        </div>

        <div class="w-full flex flex-row flex-wrap md:px-20">
            <Socket
                v-for="socket in sockets"
                v-bind:key="socket.uuid"
                v-bind:socket="socket"
            />
        </div>
    </div>
</template>

<script>
import Socket from '@/components/Socket.vue';

export default {
    data() {
        return {
            sockets: [],
        };
    },
    components: {
        Socket,
    },
    mounted() {
        this.update();
    },

    methods: {
        async update() {
            const result = await this.$root.request({
                method: 'GET',
                path: '/connect',
            });

            if (result && result.success) {
                this.sockets = result.sockets;
            } else {
                this.sockets = [];
            }
        },
        async action(socket, type, content) {
            return await this.$root.request({
                method: 'POST',
                path: '/connect',
                body: {
                    uuid: socket.uuid,
                    type,
                    content,
                }
            }).then(result => result.response);
        },
    }
};
</script>
