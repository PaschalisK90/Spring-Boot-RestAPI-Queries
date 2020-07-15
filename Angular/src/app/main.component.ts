import {Component, OnInit , NgZone} from '@angular/core';
import {Student} from './student';
import {StudentRegisterService} from './studentRegister.service';
import {Router} from '@angular/router';
declare const annyang: any;
@Component({
  selector: 'app-login',
  templateUrl: 'main.component.html'



})
export class MainComponent {
  constructor(private service: StudentRegisterService, private ngZone: NgZone) {
  }

  students: any = [];


  private annyang: any;


  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: any;

  ngOnInit() {
    let resp = this.service.getUsers();
    resp.subscribe((data) => this.students = data);
  }

  initializeVoiceRecognitionCallback(): void {
    this.annyang.addCallback('error', (err) => {
      if (err.error === 'network') {
        this.voiceText = 'Internet is require';
        this.annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        this.annyang.abort();
      }
    });
    this.annyang.addCallback('soundstart', (res) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
    });
    this.annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        this.annyang.abort();
      }
    });
    this.annyang.addCallback('result', (userSaid) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false);
      let queryText: any = userSaid[0];
      this.annyang.abort();
      this.voiceText = queryText;
      this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;
    if (this.annyang) {
      let commands = {
        'demo-annyang': () => {
        }
      };
      this.annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();
      this.annyang.start({autoRestart: false});
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.voiceText = undefined;
    if (this.annyang) {
      this.annyang.abort();
    }


  }}





