import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps-servive';
import{ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;
  buttonText!:string;


 constructor(private faceSnapsService: FaceSnapsService, private route:ActivatedRoute){} 
ngOnInit(){
  
  this.buttonText='Oh Snap!';
  const faceSnapId = +this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
}
onSnap(){
  if(this.buttonText == 'Oh Snap!'){
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.buttonText ='Oops, unSnap!';
  }else{
       this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
       this.buttonText='Oh Snap!';
  }
}
}