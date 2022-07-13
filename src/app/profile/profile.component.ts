import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Profile } from '../shared/profile.model';
import { ProfileService } from '../shared/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  empForm : FormGroup|any;
  showModal:boolean = false;
  editMode:boolean = false;

  employees: Profile[] | any;
  selectedEmployee: Profile |any;

  constructor(
    private fb: FormBuilder,
    private _empService:ProfileService) { }

  ngOnInit(): void {
    this.getEmployees();

    this.empForm = this.fb.group({
    _id: [''],
    name: [' ', Validators.required],
    position: [' ', Validators.required],
    posts: [' ', Validators.required],
    date:[' '],
    datefinal:[' '],
    venue:[' '],
    details:[' ']
    })
  }

  getEmployees(){
    this._empService.getinfolist().subscribe(
      (res: any) => {
        console.log(res);
        this.employees = res as Profile[];
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  onEmpSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
      
      if(this.editMode){
        this._empService.putinfo(this.empForm.value).subscribe(
          (res: any) => {
            console.log('Updated successfully');
            this.getEmployees();
            this.editMode = false;
          },
          (err: any) => {
            console.log(err);
          },
        );
      }else{
        this._empService.postinfo(this.empForm.value).subscribe(
          (res: any) => {
            console.log('Saved successfully');
            this.getEmployees();
          },
          (err: any) => {
            console.log(err);
          },
        );
      }
       
      this.empForm.reset();
      this.onCloseModal();

    }else{

      let key = Object.keys(this.empForm.controls);
      

      key.filter(data =>{
        
        let control = this.empForm.controls[data];
        
        if(control.errors !=null){
          control.markAsTouched();
        }
      })
    }
  }

  onEditPost(emp:Profile){
    this.editMode = true;

    console.log(emp);
    this.showModal = true;
    this.selectedEmployee = emp;
    console.log(this.selectedEmployee);
    this.empForm.patchValue(this.selectedEmployee);
  }

  onDeletePost(id: any){
    if(confirm('Do you want to delete this employee?')){
      
      this._empService.deleteinfo(id).subscribe(
        (res: any) => {
          console.log('Delete successfully');
          this.getEmployees();
        },
        (err: any) => {
          console.log(err);
        },
      );
    }
  }

  onAddPost(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false;
  }

}
