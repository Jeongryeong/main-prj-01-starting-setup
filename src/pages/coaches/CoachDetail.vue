<template>
    <section>
        <base-card>
            <h2>{{ fullName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
            <h2>Interested? Reqch out now!</h2>
            <base-button link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area">
            </base-badge >
            <p>{{ description }}</p>
        </base-card>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: null
        }
    },
    computed: {
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        fullName() {
            return this.selectedCoach.fullName + ' ' + this.selectedCoach.lastName;
        },
        description() {
            return this.selectedCoach.description;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        areas() {
            return this.selectedCoach.areas;
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (coach) => coach.id == this.id
        );
    }
}
</script>