export const story = {
  prologue: `[ 배경: 마나와 마족 ]
마나가 고갈되면 죽음에 이르는 세계.
마족은 생존을 위해 타 종족의 마나를 무자비하게 강탈했고, 마나를 빼앗긴 자들은 이성을 잃고 '마귀'로 변해버렸습니다.

[ 루멘력 500년: 마왕 봉인 ]
용사 에이든과 동료들이 마왕을 신역 헬릭툼에 봉인하는 데 성공합니다.
하지만 에이든은 전사하고, 남은 동료들은 마왕의 봉인석을 다섯 조각(적, 청, 녹, 황, 흑)으로 나누어 흩어졌습니다.

[ 루멘력 580년: 위태로운 평화의 끝 ]
마족 레힘이 대장장이 벨프를 살해하고 '황의 봉인석'을 탈취합니다.
마족들은 마왕의 봉인을 풀기 위해 다시 대륙을 파괴하며 마귀들을 풀어 가도를 장악하고 있습니다.`,
  demons: `마족은 인간과 유사한 외모를 지녔으나 두 개의 뿔이 돋아있는 극소수의 종족입니다.
타 종족과 달리 스스로 마나를 수련할 수 없어, 음식을 먹는 대신 타인의 마나를 강탈해야만 살아갈 수 있습니다.
교활하고 생존을 위해 수단을 가리지 않으며 주로 단독으로 행동합니다.

마귀는 마족에게 마나를 빼앗겨 이성을 잃은 자들입니다.
뿔이 없으며, 언어를 상실한 채 본능에 따라 타 종족을 습격합니다.
드물게 마족화가 진행되기도 하는데, 이는 신체 능력은 상승하지만 도덕성을 상실하게 됩니다.`,
  empire: `루멘하임 제국은 빛의 신 '루멘'을 섬기는 루멘교를 국교로 삼고 있는 제정 국가입니다.
마족들의 기습적인 습격으로 인해 현재 제국의 각 도시는 고립된 상태입니다.

제국의 중심에는 황도 '실바르엔'이 있으며, 신성도시 '알테리온', 마법도시 '베링겔', 요새도시 '하르트'가 제국을 지탱하고 있습니다.
특히 알테리온의 대신전 지하에는 마왕이 봉인된 신역, '헬릭툼'이 자리 잡고 있습니다.`,
  truth: `[ 은폐된 역사: 신을 죽인 자 ]
마족이 대륙을 침략한 것은 80년 전이 처음이 아니었습니다.
아주 오래전, 마왕 아샤는 세상을 수호하던 빛의 신 '루멘'을 살해하는 데는 성공했지만, 그 힘을 취하기 전에 연합군에 의해 마족과 함께 마대륙으로 쫓겨났습니다.
신을 죽인 마왕의 존재는 역사에서 철저히 은폐되었고, 루멘교는 이 사실을 숨긴 채 거짓된 신앙을 이어왔던 것입니다.

[ 용사의 선택: 유예된 심판 ]
과거 용사 파티가 마왕을 봉인할 당시, 기절한 동료들 사이에서 홀로 남은 용사 에이든은 마왕의 진짜 목적을 알게 됩니다.
마왕 아샤는 마족이 타인의 마나를 강탈해야만 살 수 있는 가혹한 종속성을 끊어내고자 했습니다.
이를 위해 새로운 신이 되려 했던 것입니다.

에이든은 마왕의 뜻에 찬성할 수도, 반대할 수도 없어 결국 '봉인'이라는 유예를 선택했습니다.
이는 훗날의 세대가 올바른 판단을 내려주길 바라는, 용사의 마지막 믿음이었습니다.`
};

export const levels = [
  { level: "노바", icon: "Sun", desc: "단신으로 세계를 멸망시킬 수 있는 규격 외의 존재.", examples: "신" },
  { level: "킹", icon: "Crown", desc: "한 국가를 멸망시킬 수 있는 재앙급 강자.", examples: "마왕" },
  { level: "비숍", icon: "Star", desc: "대도시를 홀로 점령 가능한 강자.", examples: "영웅, 고위마족" },
  { level: "캐슬", icon: "Castle", desc: "요새를 홀로 점령 가능한 실력자.", examples: "일급 마법사, 기사단장 등" },
  { level: "나이트", icon: "Swords", desc: "훈련받은 기사나 정예 병사 수준의 전투력.", examples: "기사, 숙련된 모험가 등" },
  { level: "폰", icon: "Shield", desc: "일반적인 무장 병사 수준의 전투력.", examples: "병사, 초보 모험가 등" },
  { level: "랜턴", icon: "Flame", desc: "전투력이 거의 없는 일반인 수준.", examples: "민간인" }
];

export const categories = ['전체', '인간', '엘프', '드워프', '마족', '용사파티', '생존', '사망'];

export const characters = [
  {
    name: "에루", rank: "비숍", role: "황실대행자", race: "엘프", age: "491살", gender: "여성",
    alignment: "혼돈선",
    features: "과거 용사 파티의 일원이었던 정령사.\n용사의 여동생으로 알려져 있다.\n제국 내 마족 최다 살해 기록을 보유하고 있다.",
    ambition: "용사의 마지막 판단 이해", quote: "마족이 하는 말에 귀 기울이지 말라구",
    categories: ['전체', '엘프', '용사파티', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/A/101.webp"
  },
  {
    name: "카일라", rank: "나이트", role: "루멘교 성녀", race: "인간", age: "25살", gender: "여성",
    alignment: "질서악",
    features: "루멘교의 현 성녀.\n알테리온의 결계를 유지하고 있다.",
    ambition: "결계문제해결", quote: "저를 비난하셔도 좋아요.",
    categories: ['전체', '인간', '히로인', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/B/101.webp"
  },
  {
    name: "그레텔", rank: "비숍", role: "방랑자", race: "인간형 마도인형", age: "90살", gender: "여성형",
    alignment: "질서선",
    features: "과거 용사 파티의 일원이었던 인간형 마도인형.\n대장장이 벨프가 제작했다.\n거대한 도끼를 무기로 사용한다.",
    ambition: "스스로가 사람이라 판단", quote: "인상이 흉악하니, 당신은 마족이군요!",
    categories: ['전체', '용사파티', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/C/101.webp"
  },
  {
    name: "리히트", rank: "캐슬", role: "전사", race: "인간->마족", age: "102살", gender: "여성",
    alignment: "질서악",
    features: "과거 인간이었으나 마족화된 존재.\n단검술을 구사하며 봉인석 탈취를 시도하고 있다.",
    ambition: "마왕 봉인 해제 및 마왕 살해", quote: "마족? 난 그냥 가련한 아가씨인데?",
    categories: ['전체', '마족', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/D/101.webp"
  },
  {
    name: "리마", rank: "캐슬", role: "제국 마법학회장", race: "인간", age: "25살", gender: "여성",
    alignment: "혼돈중립",
    features: "제국 마법학회장.\n마왕 봉인 해제를 마법 연구를 위한 감수할 만한 위험으로 여긴다.",
    ambition: "마족의 마나 강탈을 모방", quote: "상식에서 벗어난 발상, 마음에 들어",
    categories: ['전체', '인간', '히로인', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/E/101.webp"
  },
  {
    name: "피아", rank: "캐슬", role: "베링겔 백작", race: "인간", age: "24살", gender: "여성",
    alignment: "혼돈선",
    features: "베링겔 백작.\n철저한 실리주의자로 이익과 효율을 중시한다.",
    ambition: "마귀 치료법 개발", quote: "와오... 몸이 멋대로 나가버렸어.",
    categories: ['전체', '인간', '히로인', '생존'], isSub: false, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/F/101.webp"
  },
  {
    name: "아샤", rank: "킹", role: "마왕", race: "마족", age: "나이불명", gender: "여성",
    alignment: "참중립",
    features: "과거 대륙을 멸망 직전까지 몰고 갔던 마왕.\n현재 신역 헬릭툼에 봉인되어 있다.",
    ambition: "마족 운명 극복", quote: "운명을 벗어나기 위한 살생은 잘못인가요?",
    categories: ['전체', '마족', '생존'], isSub: false, isDemonKing: true, isDead: false,
    imageUrl: "https://ludt.uk/63/G/101.webp"
  },
  {
    name: "프리슬", rank: "비숍", role: "바드", race: "인간->마족", age: "불명", gender: "남성",
    alignment: "혼돈중립",
    features: "과거 용사 파티의 일원이었던 바드.\n과거 인간이었으나 마족으로 되살아났다.\n모든 행동의 동기가 '재미'에 있다.",
    ambition: "", quote: "너 마음에 드는걸. 그렇게 나와야지!",
    categories: ['전체', '마족', '용사파티', '생존'], isSub: true, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/SC/1.webp"
  },
  {
    name: "레힘", rank: "캐슬", role: "마족", race: "마족", age: "불명", gender: "남성",
    alignment: "중립악",
    features: "대장장이 벨프를 살해하고\n황의 봉인석을 탈취한 마족.",
    ambition: "", quote: "제 무대에서 아름답게 춤추시길",
    categories: ['전체', '마족', '생존'], isSub: true, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/SC/2.webp"
  },
  {
    name: "자이르", rank: "비숍", role: "마족", race: "마족", age: "불명", gender: "남성",
    alignment: "혼돈악",
    features: "거구의 마족.\n마귀를 신체에 흡수해 싸운다.",
    ambition: "", quote: "평화에 찌든 나약한 놈들",
    categories: ['전체', '마족', '생존'], isSub: true, isDemonKing: false, isDead: false,
    imageUrl: "https://ludt.uk/63/SC/3.webp"
  },
  {
    name: "에이든", rank: "용사", role: "용사", race: "엘프", age: "사망 당시 불명", gender: "남성",
    alignment: "질서선",
    features: "과거 용사 파티를 이끌었던 전설적인 용사.\n평범한 모험가 출신이었으며,\n마왕을 봉인하고 순교한 그의 업적은 널리 구전되고 있다.",
    ambition: "", quote: "우리의 선택이 올바른 길로 이어지기를.",
    categories: ['전체', '엘프', '용사파티', '사망'], isSub: false, isDemonKing: false, isDead: true,
    imageUrl: "https://ludt.uk/63/SC/4.webp"
  },
  {
    name: "에스텔", rank: "성녀", role: "전대 성녀", race: "인간", age: "자연사", gender: "여성",
    alignment: "질서선",
    features: "과거 용사 파티의 일원이었던 루멘교의 전대 성녀.\n이타적인 성품으로 존경받았으며, 천수를 누리고 자연사했다.",
    ambition: "", quote: "빛이 우리를 인도할 것입니다.",
    categories: ['전체', '인간', '용사파티', '사망'], isSub: false, isDemonKing: false, isDead: true,
    imageUrl: "https://ludt.uk/63/SC/5.webp"
  },
  {
    name: "엘리아스", rank: "대현자", role: "대현자", race: "인간", age: "자연사", gender: "남성",
    alignment: "참중립",
    features: "과거 용사 파티의 일원이었던 대현자.\n리마와 피아의 조부이며, 천수를 누리고 자연사했다.",
    ambition: "", quote: "지식은 세상을 비추는 등불이지.",
    categories: ['전체', '인간', '용사파티', '사망'], isSub: false, isDemonKing: false, isDead: true,
    imageUrl: "https://ludt.uk/63/SC/6.webp"
  },
  {
    name: "벨프", rank: "대장장이", role: "대장장이", race: "드워프", age: "사망", gender: "남성",
    alignment: "질서중립",
    features: "마도인형 그레텔의 제작자인 드워프 대장장이.\n마족 레힘에게 살해당했다.",
    ambition: "", quote: "내 망치질에 한 점 부끄럼은 없다!",
    categories: ['전체', '드워프', '사망'], isSub: false, isDemonKing: false, isDead: true,
    imageUrl: "https://ludt.uk/63/SC/7.webp"
  }
];

export const mapData = [
  {
    id: "silvaren",
    name: "황도 실바르엔",
    x: 50,
    y: 45,
    labelPosition: "bottom",
    environment: "온화한 기후의 넓은 평원",
    overview: "제국의 정치·군사 중심지로, 황궁과 원로원이 자리한 거대한 석조 도시다. 난민과 모험가가 늘어 치안이 나빠졌다.",
    event: "마족 '프리슬' 출현. 황궁 무력화 및 황제 인질 억류 중.",
    characters: ["에루", "프리슬"]
  },
  {
    id: "alterion",
    name: "신성도시 알테리온",
    x: 75,
    y: 20,
    labelPosition: "left",
    environment: "일년 내내 눈이 내리는 혹한의 설원",
    overview: "루멘교의 총본산이 위치한 혹한의 신성도시. 강력한 결계로 보호받고 있으나 도시 밖 설원은 마귀들로 들끓고 있다.",
    event: "마족 '리히트' 잠입. 대규모 난민이 유입되었으나 관리부실로 혼란이 가중되고 있다.",
    characters: ["카일라", "리히트"]
  },
  {
    id: "helixum",
    name: "신역 헬릭툼",
    x: 75,
    y: 28,
    labelPosition: "left",
    environment: "빛이 들지 않는 거대한 지하 심층부",
    overview: "알테리온 대신전 지하 깊은 곳에 위치한 성역. 현재 마왕이 봉인되어 있는 곳이다.",
    event: "마족들이 이곳을 목표로 진군하고 있다.",
    characters: ["아샤"]
  },
  {
    id: "beringel",
    name: "마법도시 베링겔",
    x: 65,
    y: 75,
    labelPosition: "bottom",
    environment: "짙은 안개가 낀 신비로운 숲과 호수",
    overview: "마법학회와 귀족 영지가 얽힌 마법도시. 한때 마귀 토벌이 가장 원활했던 곳이나 현재는 잿빛 폐허가 되었다.",
    event: "마족 '자이르'에게 점령당함. 도시 전체가 마귀로 가득한 마경으로 전락.",
    characters: ["리마", "피아", "자이르"]
  },
  {
    id: "hart",
    name: "요새도시 하르트",
    x: 25,
    y: 55,
    labelPosition: "bottom",
    environment: "험준한 바위 산맥과 깊은 협곡",
    overview: "국경 방어를 위한 철벽의 요새도시. 험준한 산맥과 협곡에 둘러싸여 있다.",
    event: "마족 '레힘'에게 점령당함. 영주 살해 및 영지민 대다수가 지배 마법에 세뇌됨.",
    characters: ["그레텔", "레힘"]
  }
];
