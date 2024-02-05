import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;
constructor(private builder: FormBuilder ) { }

ngOnInit() {
  this.FormData = this.builder.group({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  phone: new FormControl('', [Validators.required])
,
  message: new FormControl('', [Validators.required])
  })
  }


  onSubmit(FormData:any) {
    alert(" Sorry !!! ,Form is not valid Now ! , You can contact with me  With another way..")
    this.FormData.reset()

    /*console.log(FormData)
    this.serviceApi.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    this.FormData.reset()
    }, error => {

     alert(" Sorry !!! ,Form is not valid Now ! , You can contact with me  With another way..")
    console.warn(error.responseText)
    console.log({ error })
    this.FormData.reset()

    })
    */
    }

  }

