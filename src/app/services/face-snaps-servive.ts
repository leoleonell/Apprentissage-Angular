import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.models";
@Injectable( 
    {
        providedIn:'root' 
    }
       
    
)
export class FaceSnapsService{
faceSnap:FaceSnap[]=
[
    {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Pologne'
      },
       {
        title: 'Les Ravissantes femmes',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/07/02/14/07/women-7297355_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location: 'Association des femmes '
      },
       {
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0,
        location:'Cotonou'
      },
      {
        title: 'Un bon restaurant',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/08/10/17/31/bridge-7377716_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Une mere avec sa fille',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://cdn.pixabay.com/photo/2022/07/25/15/39/mum-7344070_1280.jpg',
        createdDate: new Date(),
        snaps: 0,
        location:'Chine'
      }
      ];
      getAllFaceSnaps():FaceSnap[]{
        return this.faceSnap;
      }
  }
