import {Component, Input} from '@angular/core';
import {BudgetCardConfig} from "../../interfaces/ui-config/budget-card-config.interface";
import {Router} from "@angular/router";
import {UiService} from "../../services/ui/ui.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-budget-card',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss'
})
export class BudgetCardComponent {
  @Input() config!: BudgetCardConfig;
  @Input() isDelete: boolean = false;

  bgColor: string = '';
  beforeColor: string = '';
  textColor: string = '';
  borderColor: string = '';

  constructor(private router: Router, private uiService: UiService) {
  }

  ngOnInit() {
    if (!this.config) {
      return;
    }
    this.borderColor = this.uiService.generateTailwindClass(this.config.color, 'border')
    this.textColor = this.uiService.generateTailwindClass(this.config.color, 'text')
    this.bgColor = this.uiService.generateTailwindClass(this.config.color, 'bg')
  }

  calculatePercentage() {
    return(this.config.spent/this.config.budget) * 100 + '%';
  }

  viewDetails() {
    if (this.config.onClick){
      this.config.onClick();
    }
  }
}
