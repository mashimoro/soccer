export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
  inputCkeck = true;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801', inputCkeck: true },
      { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226', inputCkeck: true },
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501', inputCkeck: true },
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: []
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];


export const user = {
  id: 0,
  name: 'Niky',
  all_per: 0 ,
  lang_maxBet: 5000,
  lang_minBet: 5000,
};

export class SoccerMath {
  id = 0;
  max_per = 0; // price_bet_soccer_new * stake
  max_per_show = '';
  title_thome = '';
  title_taway = '';
  spBall = 0;
  price_bet_soccer = 0; //
  price_bet_soccer_new = 0; //
  stake = 0;  //
  lang_maxBet = 0;
  lang_minBet = 0;
  font_color = 'black';
}
export class Soccer {
  inputCkeck = true;

  matchid = '';
  price_no = '';
  league_code = '';
  league_name = '';
  team_home = '';
  team_away = '';
  play_dtstart = '';
  time_play = '';
  status_live = '';
  score_home = '';
  score_away = '';
  home_red = '';
  away_red = '';
  full_hdp_code = '';
  full_hdp_ball = '';
  full_hdp_home = '';
  full_hdp_away = '';
  full_tor = '';
  TeamTor = '';
  full_goal_code = '';
  full_goal_ball = '';
  full_goal_over = '';
  full_goal_under = '';
  full_12_code = '';
  full_12_home = '';
  full_12_away = '';
  full_12_draw = '';
  half_hdp_code = '';
  half_hdp_ball = '';
  half_hdp_home = '';
  half_hdp_away = '';
  half_tor = '';
  half_goal_code = '';
  half_goal_ball = '';
  half_goal_over = '';
  half_goal_under = '';
  half_12_code = '';
  half_12_home = '';
  half_12_away = '';
  half_12_draw = '';
  statisticsid = '';

}

// tslint:disable-next-line:max-line-length
export const dataSoccer = [
  ['23643549', '1', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'France', 'Australia', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '129489538', '1.5-2', '0.880', '-0.930', 'h', '124646943', '2.5-3', '0.820', '-0.890', '124646942', '1.24', '9.80', '6.90', '124646940', '0.5-1', '-0.960', '0.880', 'h', '129606106', '1-1.5', '-0.940', '0.840', '124646932', '1.70', '6.90', '2.95', '23643549']
  , ['23643549', '2', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'France', 'Australia', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '124646945', '2.0', '-0.850', '0.800', 'h', '129489582', '3.0', '-0.880', '0.810', '', '', '', '', '129606074', '0.5', '0.710', '-0.790', 'h', '124646939', '1.0', '0.650', '-0.750', '', '', '', '', '']
  , ['23643549', '3', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'France', 'Australia', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '146640123', '1.5', '0.690', '-0.740', 'h', '146640312', '2.5', '0.670', '-0.740', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643549', '4', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'France', 'Australia', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '148632183', '2-2.5', '-0.660', '0.610', 'h', '148632194', '2-2.5', '0.480', '-0.550', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643550', '1', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Argentina', 'Iceland', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '124647051', '1.5', '-0.900', '0.840', 'h', '124647049', '2.5', '0.880', '-0.960', '124647048', '1.34', '9.00', '5.20', '124647046', '0.5', '0.840', '-0.940', 'h', '124647045', '1.0', '0.880', '-0.980', '124647038', '1.83', '7.70', '2.48', '23643550']
  , ['23643550', '2', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Argentina', 'Iceland', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '129489539', '1-1.5', '0.810', '-0.870', 'h', '129489583', '2.5-3', '-0.860', '0.780', '', '', '', '', '129606075', '0.5-1', '-0.810', '0.710', 'h', '129606107', '1-1.5', '-0.710', '0.610', '', '', '', '', '']
  , ['23643550', '3', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Argentina', 'Iceland', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '146640122', '1.5-2', '-0.720', '0.660', 'h', '146640311', '2-2.5', '0.670', '-0.750', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643550', '4', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Argentina', 'Iceland', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '148632184', '1.0', '0.540', '-0.600', 'h', '148632211', '3.0', '-0.660', '0.580', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643551', '1', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Denmark', 'Peru', '201806161214', 'LIVE@M801 12:00AM', 'False', '0', '0', '0', '0', '124647157', '0-0.5', '-0.870', '0.810', 'h', '124647155', '2.0', '0.890', '-0.970', '124647154', '2.44', '3.15', '3.10', '129606076', '0.0', '0.720', '-0.820', '', '129606108', '0.5-1', '0.860', '-0.960', '124647144', '3.15', '4.05', '1.93', '23643551']
  , ['23643551', '2', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Denmark', 'Peru', '201806161214', 'LIVE@M801 12:00AM', 'False', '0', '0', '0', '0', '129489540', '0.0', '0.730', '-0.790', '', '129489584', '2-2.5', '-0.800', '0.720', '', '', '', '', '124647152', '0-0.5', '-0.730', '0.630', 'h', '124647151', '1.0', '-0.710', '0.610', '', '', '', '', '']
  , ['23643551', '3', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Denmark', 'Peru', '201806161214', 'LIVE@M801 12:00AM', 'False', '0', '0', '0', '0', '146640114', '0.5', '-0.680', '0.620', 'h', '146640310', '1.5-2', '0.650', '-0.730', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643551', '4', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Denmark', 'Peru', '201806161214', 'LIVE@M801 12:00AM', 'False', '0', '0', '0', '0', '148632214', '0-0.5', '0.520', '-0.580', 'a', '148632212', '2.5', '-0.680', '0.600', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643552', '1', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Croatia', 'Nigeria', '201806161514', 'LIVE@M801 03:00AM', 'False', '0', '0', '0', '0', '124647263', '0.5-1', '-0.910', '0.850', 'h', '124647261', '2-2.5', '-0.920', '0.840', '124647260', '1.79', '5.10', '3.40', '124647258', '0-0.5', '0.950', '0.950', 'h', '129606109', '0.5-1', '0.770', '-0.870', '124647250', '2.40', '5.30', '2.11', '23643552']
  , ['23643552', '2', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Croatia', 'Nigeria', '201806161514', 'LIVE@M801 03:00AM', 'False', '0', '0', '0', '0', '129489541', '0.5', '0.800', '-0.860', 'h', '129489585', '2.0', '0.720', '-0.800', '', '', '', '', '129606077', '0.5', '-0.700', '0.600', 'h', '124647257', '1.0', '-0.760', '0.660', '', '', '', '', '']
  , ['23643552', '3', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Croatia', 'Nigeria', '201806161514', 'LIVE@M801 03:00AM', 'False', '0', '0', '0', '0', '146640113', '1.0', '-0.620', '0.560', 'h', '146640305', '2.5', '-0.740', '0.660', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['23643552', '4', '', '900069686', '*FIFA WORLD CUP 2018 (IN RUSSIA)', 'Croatia', 'Nigeria', '201806161514', 'LIVE@M801 03:00AM', 'False', '0', '0', '0', '0', '148632185', '0-0.5', '0.560', '-0.620', 'h', '148632213', '1.5-2', '0.530', '-0.610', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  , ['25589211', '1', '', '900070193', '*FIFA WORLD CUP 2018 (IN RUSSIA) - HOME TEAM/AWAY TEAM', 'Home Team - Saturday', 'Away Team - Saturday', '201806160559', '06/16 06:00PM', 'False', '0', '0', '0', '0', '148534027', '4-4.5', '0.910', '0.990', 'h', '148534025', '10.5', '-0.980', '0.860', '', '', '', '', '148534022', '2.0', '-0.880', '0.760', 'h', '148534021', '4.5', '-0.960', '0.840', '', '', '', '', '0']
  , ['25602347', '1', '', '900074711', '*FIFA WORLD CUP 2018 (IN RUSSIA) - SINGLE TEAM OVER/UNDER', 'France - Over', 'France - Under', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '', '', '', '', '', '148612417', '2.0', '0.630', '-0.750', '', '', '', '', '', '', '', '', '', '148612414', '0.5-1', '0.700', '-0.820', '', '', '', '', '0']
  , ['25602348', '1', '', '900074711', '*FIFA WORLD CUP 2018 (IN RUSSIA) - SINGLE TEAM OVER/UNDER', 'Australia - Over', 'Australia - Under', '201806160614', 'LIVE@M801 06:00PM', 'False', '0', '0', '0', '0', '', '', '', '', '', '148612476', '0.5', '0.990', '0.890', '', '', '', '', '', '', '', '', '', '148612473', '0.5', '-0.440', '0.320', '', '', '', '', '0']
  , ['25602349', '1', '', '900074711', '*FIFA WORLD CUP 2018 (IN RUSSIA) - SINGLE TEAM OVER/UNDER', 'Argentina - Over', 'Argentina - Under', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '', '', '', '', '', '148612535', '2.0', '-0.990', '0.870', '', '', '', '', '', '', '', '', '', '148612532', '0.5-1', '0.830', '-0.950', '', '', '', '', '0']
  , ['25602350', '1', '', '900074711', '*FIFA WORLD CUP 2018 (IN RUSSIA) - SINGLE TEAM OVER/UNDER', 'Iceland - Over', 'Iceland - Under', '201806160914', 'LIVE@M821 09:00PM', 'False', '0', '0', '0', '0', '', '', '', '', '', '148612595', '0.5', '-0.840', '0.720', '', '', '', '', '', '', '', '', '', '148612592', '0.5', '-0.330', '0.210', '', '', '', '', '0']
];
