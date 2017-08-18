import {Component} from '@angular/core';

const PLANES = [
  {
    id: 1,
    name: 'Gripen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1025448_A_Swedish_JAS-39_Gripen_returns_to_the_play' +
    '_areas_of_the_Arctic_Challenge_exercise_Sept._24%2C_2013.jpg/220px-1025448_A_Swedish_JAS-39_Gripen_returns_to_the_play' +
    '_areas_of_the_Arctic_Challenge_exercise_Sept._24%2C_2013.jpg',
    description: 'The Saab JAS 39 Gripen (English: "griffin"[Nb 3][6]) ' +
    'is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab. ' +
    'It was designed to replace the Saab 35 Draken and 37 Viggen in the Swedish Air Force (Flygvapnet). ' +
    'The Gripen has a delta wing and canard configuration with relaxed stability design and fly-by-wire flight controls. ' +
    'It is powered by the Volvo RM12, and has a top speed of Mach 2. Later aircraft are modified for NATO interoperability standards ' +
    'and to undertake in-flight refuelling.\n' +
    'In 1979, the Swedish government began development studies for an aircraft capable of fighter, attack and reconnaissance missions' +
    ' to replace the Saab 35 Draken and 37 Viggen. A new design from Saab was selected and developed as the JAS 39, first flying in 1988.' +
    ' Following two crashes during flight development and subsequent alterations to the aircraft\'s flight control software, the Gripen' +
    ' entered service with the Swedish Air Force in 1997. Upgraded variants, featuring more advanced avionics and adaptations for longer ' +
    'mission times, began entering service in 2003.\n' +
    'To market the aircraft internationally, Saab formed partnerships and collaborative efforts with multiple overseas aerospace ' +
    'companies. One example of such efforts was Gripen International, a joint partnership between Saab and BAE Systems formed in 2001. ' +
    'Gripen International was responsible for marketing the aircraft, and was heavily involved in the successful export of the type to' +
    ' South Africa; the organization was later dissolved amidst allegations of bribery being employed to secure foreign interest and' +
    ' sales. On the export market, the Gripen has achieved moderate success in sales to nations in Central Europe, South Africa and ' +
    'Southeast Asia; bribery has been suspected in some of these procurements, but authorities closed the investigation in 2009.[7]\n' +
    'A further version, designated Gripen JAS 39E/F, is under development as of 2014; it has been referred to as Gripen NG or Super-JAS.' +
    ' The changes include the adoption of a new powerplant, the General Electric F414G, an active electronically scanned array radar,' +
    ' and significantly increased internal fuel capacity. Saab has proposed other derivatives, including a navalised Sea Gripen ' +
    'for carrier operations and an optionally manned aircraft for unmanned operations. Sweden and Brazil have ordered the Gripen E/F and' +
    ' Switzerland initially selected it for procurement. As of 2013, more than 247 Gripens have been built.'
  },
  {
    id: 2,
    name: 'Raptor',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Two_F-22_Raptor_in_flying.jpg/220px-Two_F-22_Raptor_in_flying.jpg',
    description: 'The Lockheed Martin F-22 Raptor is a fifth-generation, single-seat, twin-engine, all-weather stealth tactical fighter' +
    ' aircraft developed for the United States Air Force (USAF). The result of the USAF\'s Advanced Tactical Fighter program, the ' +
    'aircraft was designed primarily as an air superiority fighter, but also has ground attack, electronic warfare, and signal ' +
    'intelligence capabilities.[6] The prime contractor, Lockheed Martin, built most of the F-22\'s airframe and weapons systems and' +
    ' did its final assembly, while Boeing provided the wings, aft fuselage, avionics integration, and training systems. ' +
    'The aircraft was variously designated F-22 and F/A-22 before it formally entered service in December 2005 as the F-22A.' +
    ' After a protracted development and despite operational issues, the USAF considers the F-22 critical to its tactical air power,' +
    ' and says that the aircraft is unmatched by any known or projected fighter.[7] The Raptor\'s combination of stealth, aerodynamic' +
    ' performance, and situational awareness gives the aircraft unprecedented air combat capabilities.' +
    'The high cost of the aircraft, a lack of clear air-to-air missions due to delays in Russian and Chinese fighter programs, ' +
    'a ban on exports, and development of the more versatile F-35 led to the end of F-22 production.[N 1] A final procurement tally of' +
    ' 187 operational production aircraft was established in 2009, and the last F-22 was delivered to the USAF in 2012.'
  },
  {
    id: 3,
    name: 'Fulcrum',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Slovak_Air_Force_MiG-29AS.JPG/220px-Slovak_Air_Force_MiG-29AS.JPG',
    description: 'The Mikoyan MiG-29 (Russian: Микоян МиГ-29; NATO reporting name: Fulcrum) is a twin-engine jet fighter aircraft ' +
    'designed in the Soviet Union. Developed by the Mikoyan design bureau as an air superiority fighter during the 1970s, the MiG-29,' +
    ' along with the larger Sukhoi Su-27, was developed to counter new American fighters such as the McDonnell Douglas F-15 Eagle, and' +
    ' the General Dynamics F-16 Fighting Falcon.[5] The MiG-29 entered service with the Soviet Air Force in 1982.\n' +
    'While originally oriented towards combat against any enemy aircraft, many MiG-29s have been furnished as multirole fighters capable' +
    ' of performing a number of different operations, and are commonly outfitted to use a range of air-to-surface armaments and precision' +
    ' munitions. The MiG-29 has been manufactured in several major variants, including the multirole Mikoyan MiG-29M and the navalised ' +
    'Mikoyan MiG-29K; the most advanced member of the family to date is the Mikoyan MiG-35. Later models frequently feature improved ' +
    'engines, glass cockpits with HOTAS-compatible flight controls, modern radar and IRST sensors, and considerably increased fuel ' +
    'capacity; some aircraft have also been equipped for aerial refuelling.\n' +
    'Following the dissolution of the Soviet Union, the militaries of a number of former Soviet republics have continued to operate' +
    ' the MiG-29, the largest of which is the Russian Air Force. The Russian Air Force wanted to upgrade its existing fleet to the ' +
    'modernised MiG-29SMT configuration, but financial difficulties have limited deliveries. The MiG-29 has also been a popular export' +
    ' aircraft; more than 30 nations either operate or have operated the aircraft to date, India being one of the largest export ' +
    'operators of the type. As of 2013, the MiG-29 is in production by Mikoyan, a subsidiary of ' +
    'United Aircraft Corporation (UAC) since 2006.'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Planes';
  planes = PLANES;
  isClicked = false;
  description = null;
  image = null;

  onViewDetails(plane) {
    this.description = plane.description;
    this.image = plane.image;
  }

  onSwapIsClicked(status) {
    this.isClicked = status;
  }
}
