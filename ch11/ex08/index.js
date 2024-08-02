function regExp() {
  // new RegExp('パターン', 'オプションフラグ（後述）')
  const re = new RegExp(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"
  );
  const str = "^(a|aa)+$";
  const resultTest = re.test(str);
  console.log(resultTest);
}

regExp();

//多分逆↑
