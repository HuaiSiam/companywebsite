<template src="../views/team.html"></template>

<script>
import { Carousel, Slide } from 'vue-carousel';
// import $ from 'jquery';

export default {
    components: {Carousel, Slide},
    data () {
        return {
            members: [
                { name: 'Harry Banks', position_data: 'Founder', mail: 'harrybanks@gmail.com', photo: require('../assets/img/founder.jpg') },
                { name: 'Chris Martin', position_data: 'Co.Founder', mail: 'chrismartin@gmail.com', photo: require('../assets/img/cofounder.jpg') },
                { name: 'Ellyse Perry', position_data: 'Managing Director', mail: 'ellyseperry@gmail.com', photo: require('../assets/img/md.jpg') },
                { name: 'Danny M', position_data: 'SR. Architect', mail: 'dannym@gmail.com', photo: require('../assets/img/archi.jpg') },
                { name: 'Sarah Taylor', position_data: 'Designer', mail: 'sarahtaylor@gmail.com', photo: require('../assets/img/designer.jpg') },
                { name: 'Rebecca Smith', position_data: 'Assistant Designer', mail: 'rebeccasmith@gmail.com', photo: require('../assets/img/assdesigner.jpg') }
            ]
        }
    }
}
</script>