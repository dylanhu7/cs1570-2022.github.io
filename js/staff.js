import pageSectionTitle from './page-section.js';


const csEmail = {
    props: {
        cslogin: String,
        email: {
            type: String,
            default: null,
        },
    },
    computed: {
        mailto: function() {
            return `mailto:${this.email === null ? this.cslogin + '@cs.brown.edu' : this.email}`;
        },
    },
    template: `
      <a :href="mailto">
          {{cslogin}}
          <i class="fas fa-envelope"></i>
      </a>
    `
};

const staffCard = {
    props: {
        cslogin: String,
        email: {
            type: String,
            default: null,
        },
        name: String,
        note: String,
        personalPhotoURL: {
            type: String,
            default: 'imgs/jack-anstey-XVoyX7l9ocY-unsplash.jpg'
        },
        publicTransitPhotoURL: {
            type: String,
            default: 'imgs/jack-anstey-XVoyX7l9ocY-unsplash.jpg'
        },
        publicTransit: String,
    },
    components: {
        'cs-email': csEmail,
    },
    data: function() {
        return {
            showPersonalPhoto: false,
        };
    },
    computed: {
        id: function() {
            return this.name.toLowerCase().replace(' ', '-');
        },
        alt: function() {
            return `${this.showPersonalPhoto ? 'staff': 'public transit'} photo of ${this.name}`;
        },
    },
    template: `
        <div
          :id="id"
          class="card text-center m-4"
          :style="{'border-color': curPageThemeColor}"
          @mouseenter.passive="showPersonalPhoto = true"
          @mouseleave.passive="showPersonalPhoto = false"
        >
            <div
              class="card-header text-muted font-weight-light"
              style="font-size: medium"
            >
                {{ publicTransit }}
            </div>
            <img
                :src="showPersonalPhoto ? personalPhotoURL: publicTransitPhotoURL"
                class="card-img-top"
                style="width: 300px; height: 300px;"
                :alt="alt"
            >
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title mb-0">
                    {{ this.name }}
                </h5>
                <p class="card-text mb-0">
                    <cs-email
                      :cslogin="cslogin"
                      :email="email"
                    ></cs-email>
                </p>
                <p class="card-text mb-0">
                    {{note}}
                </p>
            </div>
        </div>
    `
};


const staffGroup = {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
        title: String,
        members: Array,
    },
    components: {
        'page-section-title': pageSectionTitle,
        'staff-card': staffCard,
    },
    template: `
        <section class="container-fluid d-flex flex-wrap flex-column my-5 px-5">
            <page-section-title
              :icon-classes="curPageIconClasses"
              :text="title"
              :style-object="{'color': curPageThemeColor}"
              :text-style-object="{'text-decoration': 'overline dashed','border-top': 'solid medium', 'padding-top': '0.05rem'}"
            >
            </page-section-title>
            <div
              class="d-flex flex-row flex-wrap justify-content-center"
              :style="{ color: curPageThemeColor, 'font-size': 'larger' }"
            >
                <staff-card
                  v-for="(member, index) of members"
                  :key="index"
                  v-bind="member"
                >
                </staff-card>
            </div>
        </section>
    `,
};


Vue.component('page-content', {
    props: {
        curPageThemeColor: String,
        curPageIconClasses: Array,
    },
    components: {
        'staff-group': staffGroup,
    },
    data: function() {
        return {
            titles: ['the professor', 'the HTAs', 'the UTAs'],
            groups: [
                [
                    {
                        cslogin: 'pklein',
                        email: 'philip@brown.edu',
                        name: 'Philip Klein',
                        personalPhotoURL: 'staff/prof_klein.jpg',
                        publicTransitPhotoURL: 'staff/prof_klein_transit.jpg',
                        publicTransit: 'BART',
                    },
                ],
                [
                    {
                        cslogin: 'jzagorsk',
                        name: 'Jason Zagorski',
                        personalPhotoURL: 'staff/jason_personal.png',
                        publicTransitPhotoURL: 'staff/jason_transit.jpg',
                        publicTransit: 'Long Island Rail Road',
                    },
                    {
                        cslogin: 'awheele9',
                        name: 'Archer Wheeler',
                        note: 'Grad TA',
                        personalPhotoURL: 'staff/archer_personal.jpg',
                        publicTransitPhotoURL: 'staff/archer_transit.jpeg',
                        publicTransit: '1,2,3 Subway',
                    },
                    {
                        name: 'Aaron Zhang',
                        personalPhotoURL: 'staff/aaron_personal.jpg',
                        publicTransitPhotoURL: 'staff/aaron_transit.jpg',
                        publicTransit: 'Thomas the Tank Engine',
                        cslogin: 'azhang28'
                    },
                ],
                [
                    {
                        cslogin: 'dhuo',
                        name: 'Da Huo',
                        personalPhotoURL: 'staff/da-personal.jpg',
                        publicTransitPhotoURL: 'staff/da_transit.jpg',
                        publicTransit: 'NJ Transit',
                    },
                    {
                        cslogin: 'gbrady1',
                        name: 'Galadriel Brady',
                        personalPhotoURL: 'staff/galadriel-personal.jpg',
                        publicTransitPhotoURL: 'staff/galadriel_transit.png',
                        publicTransit: 'Berlin U-Bahn / U1',
                    },
                    {
                        cslogin: 'jcardozo',
                        name: 'Justin Cardozo',
                        personalPhotoURL: 'staff/justin_cardozo.jpg',
                        publicTransitPhotoURL: 'staff/justin_c_transit.jpg',
                        publicTransit: 'Caltrain',
                    },
                    {
                        cslogin: 'jzhang80',
                        name: 'Justin Zhang',
                        personalPhotoURL: 'staff/justin_zhang.jpg',
                        publicTransitPhotoURL: 'staff/justin_z_transit.jpg',
                        publicTransit: 'GS bridge',
                    },
                    {
                        name: 'Rigel Galgana',
                        // personalPhotoURL: '',
                        // publicTransitPhotoURL: '',
                        cslogin: 'rgalgana',
                    },
                    {
                        cslogin: 'sgotmare',
                        name: 'Yash Gotmare',
                        personalPhotoURL: 'staff/yash_personal.png',
                        publicTransitPhotoURL: 'staff/yash_transit.jpg',
                        publicTransit: 'Boeing 787-10',
                    },
                    {
                        cslogin: 'zpeng3',
                        name: 'Zhengyi Peng',
                        personalPhotoURL: 'staff/zhengyi_personal.jpeg',
                        publicTransitPhotoURL: 'staff/zhengyi_transit.jpg',
                        publicTransit: '复兴号 (Fuxing Hao)',
                    },
                ],
            ]
        };
    },
    mounted: function() {
        const element = this.$el;
        document.addEventListener('DOMContentLoaded', function() {
            element.scrollIntoView(true);
            window.scrollBy(0, -150);
        }, false);
    },
    template: `
        <main>
            <staff-group
                v-for="(title, index) of titles"
                :key="index"
                :cur-page-theme-color="curPageThemeColor"
                :cur-page-icon-classes="curPageIconClasses"
                :title="title"
                :members="groups[index]"
            >
            </staff-group>
        </main>
    `
});
