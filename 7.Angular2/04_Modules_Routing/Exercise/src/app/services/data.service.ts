import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {reject} from 'q';

import {Car} from '../interfaces/car';
import {Owner} from '../interfaces/owner';

const DATA = {
  cars: [
    {
      id: 0,
      make: 'Mazda',
      model: '323',
      year: 1979,
      engine: 1.4,
      owner: 'Yanko',
      image: 'http://speedhunters-wp-production.s3.amazonaws.com/wp-content/uploads/2015/02/03170008/Mazda-323-04N.jpg',
      createdOn: Date.now() + 1,
      comments: [
        'WoW',
        'Smashing'
      ]
    },
    {
      id: 1,
      make: 'Mazda',
      model: '323',
      year: 1984,
      engine: 1.3,
      owner: 'Ceco',
      image: 'https://img.favcars.com/mazda/323/mazda_323_1980_wallpapers_1.jpg',
      createdOn: Date.now() + 2,
      comments: [
        'Boring, but reliable'
      ]
    },
    {
      id: 2,
      make: 'Mazda',
      model: '323',
      year: 1985,
      engine: 1.5,
      owner: 'Petko',
      image: 'https://i.ytimg.com/vi/MIz-KU4D7dw/maxresdefault.jpg',
      createdOn: Date.now() + 3,
      comments: []
    },
    {
      id: 3,
      make: 'Mazda',
      model: '323',
      year: 1989,
      engine: 1.6,
      owner: 'Dimityr',
      image: 'https://i.ytimg.com/vi/Pm8oH-MMF1M/maxresdefault.jpg',
      createdOn: Date.now() + 4,
      comments: []
    },
    {
      id: 4,
      make: 'Mazda',
      model: '323',
      year: 1994,
      engine: 1.8,
      owner: 'Stanka',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Mazda_323_F_1.6l_BG_-_2.JPG',
      createdOn: Date.now() + 5,
      comments: [
        'I like the front lights'
      ]
    },
    {
      id: 5,
      make: 'Mazda',
      model: '323',
      year: 1997,
      engine: 1.5,
      owner: 'Ceco',
      image: 'https://s1.cdn.autoevolution.com/images/gallery/MAZDA323F-922_2.jpg',
      createdOn: Date.now() + 6,
      comments: [
        'Great',
        'Nice alloys! :)'
      ]
    },
    {
      id: 6,
      make: 'Mazda',
      model: '323',
      year: 2001,
      engine: 2.0,
      owner: 'Georgi',
      image: 'https://bg.autodata24.com/i/mazda/323/323-f-vi-bj/large/6834a63d96af576dc44cf754732aa266.jpg',
      createdOn: Date.now() + 7,
      comments: []
    },
    {
      id: 7,
      make: 'Mazda',
      model: '3',
      year: 2005,
      engine: 2.3,
      owner: 'Ivan',
      image: 'https://motoring.li.csnstatic.com/motoring/general/editorial/ge5101047111425598496.jpg',
      createdOn: Date.now() + 8,
      comments: [
        'I like them, but (Ford...) :('
      ]
    },
    {
      id: 8,
      make: 'Mazda',
      model: '3',
      year: 2012,
      engine: 2.0,
      owner: 'Angel',
      image: 'https://www.mazda-forum.info/attachments/mazda-3-tuning_20130624112113uid2-png.36305/',
      createdOn: Date.now() + 9,
      comments: [
        'A pretty one'
      ]
    },
    {
      id: 9,
      make: 'Mazda',
      model: '3',
      year: 2017,
      engine: 2.3,
      owner: 'Silviq',
      image: 'http://automobilio.info/auto/Mazda-3-III-Hatchback.jpg',
      createdOn: Date.now() + 10,
      comments: []
    },
    {
      id: 10,
      make: 'Mazda',
      model: 'RX8',
      year: 2007,
      engine: 1.3,
      owner: 'Ceco',
      image: 'http://4.bp.blogspot.com/-vdEv7ktTsmA/TzqSI7aRzcI/AAAAAAAAAYM/d0broxyt-Q8/s1600/Mazda-RX-8.jpg',
      createdOn: Date.now() + 11,
      comments: [
        'Best sports car ever'
      ]
    }
  ],
  owners: [
    {
      id: 0,
      name: 'Ceco',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/sebastian-vettel/' +
      '_jcr_content/image.img.1920.medium.jpg/1490267969275.jpg',
      carsOwned: 3
    },
    {
      id: 1,
      name: 'Yanko',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/lewis-hamilton/' +
      '_jcr_content/image.img.1920.medium.jpg/1490267849284.jpg',
      carsOwned: 1
    },
    {
      id: 2,
      name: 'Petko',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/valtteri-bottas/' +
      '_jcr_content/image.img.1920.medium.jpg/1490267884485.jpg',
      carsOwned: 1
    },
    {
      id: 3,
      name: 'Dimityr',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/daniel-ricciardo/' +
      '_jcr_content/image.img.1920.medium.jpg/1490268381560.jpg',
      carsOwned: 1
    },
    {
      id: 4,
      name: 'Stanka',
      image: 'https://s-media-cache-ak0.pinimg.com/736x/dc/b9/e7/dcb9e7c71127e0efd996f01d66e76884--rally-drivers-funny-cars.jpg',
      carsOwned: 1
    },
    {
      id: 5,
      name: 'Georgi',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/kimi-raikkonen/_jcr_content/' +
      'image.img.1920.medium.jpg/1490268227661.jpg',
      carsOwned: 1
    },
    {
      id: 6,
      name: 'Ivan',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/max-verstappen/_jcr_content/' +
      'image.img.1920.medium.jpg/1490268111731.jpg',
      carsOwned: 1
    },
    {
      id: 7,
      name: 'Angel',
      image: 'https://www.formula1.com/content/fom-website/en/championship/drivers/sergio-perez/_jcr_content/' +
      'image.img.1920.medium.jpg/1490970853039.jpg',
      carsOwned: 1
    },
    {
      id: 8,
      name: 'Silviq',
      image: 'http://emmagilmour.com/i/images/emma.jpg',
      carsOwned: 1
    }
  ]
};

@Injectable()
export class DataService {
  private data: any;

  constructor() {
    this.data = DATA;
  }

  getCarsAll(): Promise<Array<Car>> {
    return new Promise((resolve, reject) => {
      resolve(this.data.cars);
    });
  }

  getCarById(id): Promise<Car> {
    let car = {};
    this.data.cars.map((c) => {
      if (c.id === Number(id)) {
        car = c;
      }
    });

    return new Promise((resolve, reject) => {
      resolve(car);
    });
  }

  getOwnersAll(): Promise<Array<Owner>> {
    return new Promise((resolve, reject) => {
      resolve(this.data.owners);
    });
  }

  getOwnerById(id): Promise<Owner> {
    let owner = {};
    this.data.owners.map((o) => {
      if (o.id === Number(id)) {
        owner = o;
      }
    });

    return new Promise((resolve, reject) => {
      resolve(owner);
    });
  }
}
