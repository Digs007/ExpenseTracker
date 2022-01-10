import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class TrackerService extends Service {
  @tracked
  transactions = [];
  @tracked
  income = 0;
  @tracked
  expense = 0;
  @tracked
  total = 0;
}
