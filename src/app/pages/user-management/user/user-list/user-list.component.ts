import { UserEditComponent } from './../user-edit/user-edit.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  form = new FormGroup({
    status: new FormControl(2),
    search: new FormControl(null),
  });

  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) {

  }

  submitForm() {

  }

  createNewUser() {
    const modal = this.modal.create({
      // nzTitle: 'Create User',
      nzWidth: '500px',
      nzContent: UserEditComponent,
      nzClosable: false,
      nzFooter: null
      // [
      //   {
      //     label: 'Submit',
      //     type: 'primary',
      //     onClick: componentInstance => {
      //       modal.close();
      //     }
      //   }
      // ],
    });
  }

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: Data[] = [];
  listOfCurrentPageData: Data[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
    this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
    this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.refreshCheckedStatus();
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => {
      return {
        id: index,
        name: `Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`,
        disabled: index % 2 === 0
      };
    });
  }

}

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}
