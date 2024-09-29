import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TableDataConfig} from "../../interfaces/ui-config/table-data-config.interface";
import {DatePipe, NgForOf} from "@angular/common";
import {UiService} from "../../services/ui/ui.service";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() data: TableDataConfig[] = []
  @Output() removeRow: EventEmitter<TableDataConfig> = new EventEmitter();

  constructor(public uiService: UiService) {
  }
  handleAction(item: TableDataConfig){
    this.removeRow.emit(item);

  }
}
