import React, {Component} from 'react';
import Image from 'react-bootstrap/image';
import gestureWrist from './images/gesture-wrist.jpg';
import gestureLeg from './images/gesture-leg.jpg';
import tflogo from './images/tensorflow.png';

class VisionList extends Component {

    render() {
        return (
            <div>
            <h3>Project Motivation</h3>
            <p>The current existing technologies targeting digital access for those with motor impairments consist of clunky products like bulky joysticks and big buttons.  These products are currently state-of-the-art in assistive technology, but in the general technology world, they were state of the art technology a century ago. While technology is trending towards being smarter, smaller, and seamless, assistive technology is going in the opposite direction which further widens the gap in digital accessibility for  people with physical challenges such as cerebral palsy .</p>
            <p>We want our technology to be dignified for the user and to empower each person’s capacity for independence. Through this project, we try to understand the unique physicality of different users with cerebral palsy and experience what it would be like to use current assistive technology and how we could design something better.  If I am given a product to use with an outdated design such as a bulky joystick, I wouldn’t use it for the sole reason of it looking different and being against the grain of modern technology.  If someone were to use assistive technology that attracts unwanted attention, how would that make them feel using it?  Would these products be a constant reminder of their physical challenges?  </p>
            <p>With our project, we want to use modern technology that can be shared with both users with physical limitations and general consumers to diminish any sense of isolation between the two communities.  We chose to use gesture control as our technology, since we also see the desire for such a device in the general consumer base. Our goal is to design a product that will be widely adopted by users with physical limitations, and we believe the only way this is possible is for these devices to also be used by family members, friends, and caregivers of our target population.  </p>
            <p>We want our technology to bridge the experiences between users and the people who support them. It may be a challenge to pinpoint where and why current assistive technology fails without having the lived experience, thus we are committed to engaging input from people who provide support as well so that we can address all types of users. Our technology is based on gesture control with machine learning for recognizing personalized gestures.  This intriguing technology is a newer concept for the general consumer as well, and we think there will be a learning curve to get started that is equally challenging for someone with a physical limitation as it will be for someone who does not. Since our platform will require a series of training sessions, we want to make these multi-user sessions for both a user and their caregivers to participate in at the same time to make setting up less tedious.  We want to make these training sessions a fun, interactive bonding opportunity that further piques interest in this technology. Through these sessions, the device can give users the ability to control TVs or send messages to each other through common, yet unique gestures.</p>    
                <h3>The Technology</h3>
                <div className='row'>
                    <Image src={gestureWrist} className='col-4 offset-1'  rounded/>
                    <Image src={gestureLeg} className='col-2'  rounded/>
                    <Image src={tflogo} className='col-3 offset-2' />              
                </div>
            </div>
            )                
        }
 }

export default VisionList