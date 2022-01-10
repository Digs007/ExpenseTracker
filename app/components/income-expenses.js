import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
// import { action } from '@ember/object';
// import { tracked } from '@glimmer/tracking';
export default class IncomeExpensesComponent extends Component {
  @service tracker;
  // @tracked
  // amounts = this.tracker.transactions.map((transaction) => {
  //   console.log(transaction);
  //   transaction.amount;
  // });
  // @tracked
  // income = this.amounts
  //   .filter((item) => item > 0)
  //   .reduce((acc, item) => (acc += item), 0);
  // @tracked
  // expense =
  //   this.amounts
  //     .filter((item) => item < 0)
  //     .reduce((acc, item) => (acc += item), 0) * -1;
}
