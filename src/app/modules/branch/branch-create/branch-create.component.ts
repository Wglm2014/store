import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Branch } from '../../../models/branch';

@Component({
  selector: 'branch-create',
  templateUrl: './branch-create.component.html',
  styleUrls: ['./branch-create.component.css']
})
export class BranchCreateComponent implements OnInit {
  branch: Branch = new Branch();
  @Input('address') address: string;
  @Input('department') department: string;
  @Input('municipality') municipality: string;
  @Input('branchEdit') branchEdit: Branch;
  @Output() createdBranch = new EventEmitter<Branch>();
  @Output() editResult = new EventEmitter<any>();
  @Output() addBranch = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  save() { }

}
