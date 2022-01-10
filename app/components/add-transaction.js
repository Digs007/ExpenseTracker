import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class AddTransactionComponent extends Component {
  @service tracker;
  @tracked
  text = '';
  @tracked
  amount = '';
  @action
  updateText(event) {
    this.text = event.target.value;
  }
  @action
  updateAmount(event) {
    this.amount = event.target.value;
  }
  @action
  addTransaction() {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: this.text,
      amount: +this.amount,
    };
    if (this.amount > 0) this.tracker.income += parseInt(this.amount);
    else this.tracker.expense += parseInt(this.amount);
    this.tracker.total = this.tracker.income + this.tracker.expense;
    console.log(this.tracker.total);
    this.text = '';
    this.amount = '';
    this.tracker.transactions = [newTransaction, ...this.tracker.transactions];
    // console.log(this.tracker.transactions);
  }
}
