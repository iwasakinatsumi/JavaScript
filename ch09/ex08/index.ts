//この状態遷移を管理するコード例として、以下のようなクラスが考えられる。
//AlarmClock インスタンスに対して、各イベントに対応するメソッドを呼び出すと、内部で状態遷移が発生し、実行すべきアクションを返り値として返す。

// 目覚まし時計の状態
type State =
  | "normal" // 通常
  | "alarmSet" // アラームセット中
  | "alarmSounding" // アラーム鳴動中
  | "snoozing"; // スヌーズ中

// イベント時に発生するアクション
type Action =
  | "none" // 何もしない
  | "soundAlarm" // アラームを鳴らす
  | "stopAlarm"; // アラームを止める

// 目覚まし時計クラス
class AlarmClock {
  private state: State;

  constructor() {
    this.state = "normal";
  }

  // アラーム設定イベント
  setAlarm(): Action {
    switch (this.state) {
      case "normal":
        this.state = "alarmSet";
        return "none";
      default:
        return "none";
    }
  }

  // アラーム解除イベント
  cancelAlarm(): Action {
    switch (this.state) {
      case "alarmSet":
        this.state = "normal";
        return "none";
      case "alarmSounding":
        this.state = "normal";
        return "stopAlarm";
      case "snoozing":
        this.state = "normal";
        return "none";
      default:
        return "none";
    }
  }

  // アラーム設定時刻到達イベント
  reachedToAlarmTime(): Action {
    switch (this.state) {
      case "alarmSet":
        this.state = "alarmSounding";
        return "soundAlarm";
      default:
        return "none";
    }
  }

  // スヌーズイベント
  snooze(): Action {
    switch (this.state) {
      case "alarmSounding":
        this.state = "snoozing";
        return "stopAlarm";
      default:
        return "none";
    }
  }

  // スヌーズ設定時間経過イベント
  elapseSnoozeTime(): Action {
    switch (this.state) {
      case "snoozing":
        this.state = "alarmSounding";
        return "soundAlarm";
      default:
        return "none";
    }
  }
}


//このコードに対して、すべての状態遷移を網羅するテストを作成することを考える。
//例えば アラームセット中 の状態から各イベントを受け取ったときのテストを作成するには、
//事前条件として毎回 通常 状態から、アラーム設定 と アラーム設定時刻到達 のイベントを経て アラームセット中 の状態に遷移させる必要がある。
//これを各状態のテストに対して実施するのは煩雑である。
//この目覚まし時計の状態遷移モデルのテスト性を向上させるためのアプローチとしてどのような方法があるか考え、それを実装しなさい。
//また、作成されたコードに対してすべての状態遷移を検査するテストを作成しなさい。