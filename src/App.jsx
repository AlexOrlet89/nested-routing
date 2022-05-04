import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';
import React from 'react';

const data = {
  StardustCrusaders: [
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/ca/latest/20191015215651/Star_Platinum_SC_Infobox_Anime.png/270px-Star_Platinum_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/3/3a/latest/20200315224152/Jotaro_SC_Infobox_Anime.png/270px-Jotaro_SC_Infobox_Anime.png',
      user: 'Jotaro Kujo',
      Stand: 'Star Platinum',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/48/latest/20191015214312/Magician%27s_Red_Infobox_Anime.png/270px-Magician%27s_Red_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/8/80/latest/20200111150639/Avdol_Infobox_Anime.png',
      user: 'Muhammad Avdol',
      Stand: "Magician's Red",
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Brown',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/0a/latest/20191015214921/Hermit_Purple_SC_Infobox_Anime.png/270px-Hermit_Purple_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/6/6e/latest/20200315224059/Joseph_young_BT_Infobox_Anime.png/270px-Joseph_young_BT_Infobox_Anime.png',
      user: 'Joseph Joestar',
      Stand: 'Hermit Purple',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/3/3e/latest/20191015214200/Hierophant_Green_Infobox_Anime.png/270px-Hierophant_Green_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Reconnaissance', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/9/9f/latest/20200111151714/Kakyoin_Infobox_Anime.png',
      user: 'Noriaki Kakyoin',
      Stand: 'Hierophant Green',
      gender: 'Male',
      hair_color: 'Cherry red',
      eye_color: 'Lavender',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/09/latest/20191015214835/Silver_Chariot_SC_Infobox_Anime.png/270px-Silver_Chariot_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/b/ba/latest/20200111152901/Polnareff_SC_Infobox_Anime.png',
      user: 'Jean Pierre Polnareff',
      Stand: 'Silver Chariot',
      gender: 'Male',
      hair_color: 'Silver',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/10/latest/20191015214220/The_Fool_Infobox_Anime.png/270px-The_Fool_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Materialized', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/3/31/latest/20200111154226/Iggy_Infobox_Anime.png',
      user: 'Iggy',
      Stand: 'The Fool',
      gender: 'Male',
      hair_color: 'Black and White',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/c2/latest/20191015212839/Tower_of_Gray_Infobox_Anime.png/270px-Tower_of_Gray_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/5/52/latest/20200111175227/Gray_Fly_Infobox_Anime.jpg',
      user: 'Gray Fly',
      Stand: 'Tower of Gray',
      gender: 'Male',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/56/latest/20191015215028/Dark_Blue_Moon_Infobox_Anime.png/270px-Dark_Blue_Moon_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/a/a5/latest/20200111175908/Cpt_Tenille_Infobox_Anime.png',
      user: 'Impostor Captain Tennille',
      Stand: 'Dark Blue Moon',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/ba/latest/20191015213514/Strength_Infobox_Anime.png/270px-Strength_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Materialized', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/a/af/latest/20200111182036/Forever_Infobox_Anime.png',
      user: 'Forever',
      Stand: 'Strength',
      gender: 'Male',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/77/latest/20191015215743/Ebony_Devil_Infobox_Anime.png/270px-Ebony_Devil_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Materialized', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/a/a2/latest/20200111183226/Devo_Infobox_Anime.png',
      user: 'Devo the Cursed',
      Stand: 'Ebony Devil',
      gender: 'Male',
      hair_color: 'Dark Brown',
      eye_color: 'Dark Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/3/38/latest/20191015213708/Yellow_Temperance_Infobox_Anime.png/270px-Yellow_Temperance_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Materialized', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/c/ca/latest/20200111184049/Rubber_Soul_Infobox_Anime.png',
      user: 'Rubber Soul',
      Stand: 'Yellow Temperance',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Brown',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/1f/latest/20191015214036/Hanged_Man_Infobox_Anime.png/270px-Hanged_Man_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/92/latest/20200415174115/JGeil_Infobox_Anime.png/270px-JGeil_Infobox_Anime.png',
      user: 'J. Geil',
      Stand: 'Hanged Man',
      gender: 'Male',
      hair_color: 'Bald',
      eye_color: 'White',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/5d/latest/20191015213038/Emperor_Infobox_Anime.png/270px-Emperor_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/6/64/latest/20200111185801/Hol_Horse_Infobox_Anime.png',
      user: 'Hol Horse',
      Stand: 'Emperor',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/c9/latest/20191015214559/Empress_Infobox_Anime.png/270px-Empress_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Materialized', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/42/latest/20200430225514/Nena_Infobox_Anime.png/270px-Nena_Infobox_Anime.png',
      user: 'Nena',
      Stand: 'Empress',
      gender: 'Female',
      hair_color: 'Black',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/b7/latest/20191015215847/Wheel_of_Fortune_Infobox_Anime.png/270px-Wheel_of_Fortune_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Materialized', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/5/51/latest/20200111191304/ZZ_Infobox_Anime.png',
      user: 'ZZ',
      Stand: 'Wheel of Fortune',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/e/e9/latest/20191015213222/Justice_Infobox_Anime.png/270px-Justice_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/3/3a/latest/20200111192404/Enya_Infobox_Anime.png',
      user: 'Enya the Hag',
      Stand: 'Justice',
      gender: 'Female',
      hair_color: 'Gray',
      eye_color: 'Gray',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/4a/latest/20191015215255/Lovers_Infobox_Anime.png/270px-Lovers_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/7/7d/latest/20200111195535/Steely_Dan_Infobox_Anime.png',
      user: 'Steely Dan',
      Stand: 'Lovers',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Maroon',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/f/fd/latest/20191015215104/Sun_Infobox_Anime.png/270px-Sun_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/2/22/latest/20200111195851/Arabia_Fats_Infobox_Anime.png',
      user: 'Arabia Fats',
      Stand: 'Sun',
      gender: 'Male',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/be/latest/20191015220115/Death_Thirteen_Infobox_Anime.png/270px-Death_Thirteen_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Artificial Humanoid',
        'Psychological Assault',
      ],
      user_image:
        'https://static.jojowiki.com/images/2/27/latest/20200111200208/Mannish_Boy_Infobox_Anime.png',
      user: 'Mannish Boy',
      Stand: 'Death Thirteen',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Purple Yellow',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/ab/latest/20191015214313/Judgment_Infobox_Anime.png/270px-Judgment_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/7/7b/latest/20200111200349/Cameo_Infobox_Anime.png',
      user: 'Cameo',
      Stand: 'Judgement',
      gender: 'Male',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/1f/latest/20191015213729/High_Priestess_Infobox_Anime.png/270px-High_Priestess_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/7/72/latest/20200111200607/Midler_Infobox_Anime.png',
      user: 'Midler',
      Stand: 'High Priestess',
      gender: 'Female',
      hair_color: 'Dark Brown',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/2/26/latest/20191015212741/Geb_Infobox_Anime.png/270px-Geb_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Materialized', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/7/78/latest/20191015213254/N%27Doul_Infobox_Anime.png/270px-N%27Doul_Infobox_Anime.png',
      user: "N'Doul",
      Stand: 'Geb',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Gray',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/1c/latest/20191015214835/Khnum_Infobox_Anime.png/270px-Khnum_Infobox_Anime.png',
      stand_type: ['Integrated Stand', 'Phenomenon'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/52/latest/20191016205635/Oingo_Infobox_Anime.PNG/270px-Oingo_Infobox_Anime.PNG',
      user: 'Oingo',
      Stand: 'Khnum',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/09/latest/20191015212816/Tohth_Infobox_Anime.png/270px-Tohth_Infobox_Anime.png',
      stand_type: [
        'Automatic',
        'Foresight',
        'Materialized',
        'Artificial Non-Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/8/85/latest/20191016205647/Boingo_Infobox_Anime.PNG/270px-Boingo_Infobox_Anime.PNG',
      user: 'Boingo',
      Stand: 'Tohth',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/dd/latest/20191015212929/Bastet_Infobox_Anime.png/270px-Bastet_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/6/60/latest/20191015214608/Mariah_Infobox_Anime.png/270px-Mariah_Infobox_Anime.png',
      user: 'Mariah',
      Stand: 'Bastet',
      gender: 'Female',
      hair_color: 'White',
      eye_color: 'Brown',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/44/latest/20191015220111/Sethan_Infobox_Anime.png/270px-Sethan_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Materialized', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/e/e2/latest/20200113231601/Alessi_Infobox_Anime.png/270px-Alessi_Infobox_Anime.png',
      user: 'Alessi',
      Stand: 'Sethan',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Red',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/ae/latest/20191015214651/Osiris_Infobox_Anime.png/270px-Osiris_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Psychological Assault', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/3/39/latest/20191015212928/Daniel_J._D%27Arby_Infobox_Anime.png/270px-Daniel_J._D%27Arby_Infobox_Anime.png',
      user: "Daniel J. D'Arby",
      Stand: 'Osiris',
      gender: 'Male',
      hair_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/d7/latest/20191015214956/Horus_Infobox_Anime.png/270px-Horus_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/b/be/latest/20191016205647/Pet_Shop_Infobox_Anime.PNG/270px-Pet_Shop_Infobox_Anime.PNG',
      user: 'Pet Shop',
      Stand: 'Horus',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/50/latest/20191015215748/Atum_Infobox_Anime.png/270px-Atum_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Psychological Assault',
        'Artificial Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/40/latest/20191015215009/Telence_T._D%27Arby_Infobox_Anime.png/270px-Telence_T._D%27Arby_Infobox_Anime.png',
      user: "Telence T. D'Arby",
      Stand: 'Atum',
      gender: 'Male',
      hair_color: 'Green',
      eye_color: 'Hazel',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/6/66/latest/20191222010350/Tenore_Sax_Infobox_Anime.png/270px-Tenore_Sax_Infobox_Anime.png',
      stand_type: ['Phenomenon', 'Psychological Assault'],
      user_image:
        'https://static.jojowiki.com/images/thumb/0/05/latest/20191015213308/Kenny_G._Infobox_Anime.png/270px-Kenny_G._Infobox_Anime.png',
      user: 'Kenny G.',
      Stand: 'Tenore Sax',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/7f/latest/20191015213754/Cream_Infobox_Anime.png/270px-Cream_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/a/a8/latest/20191015214943/Vanilla_Ice_Infobox_Anime.png/270px-Vanilla_Ice_Infobox_Anime.png',
      user: 'Vanilla Ice',
      Stand: 'Cream',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Pink',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/9/98/latest/20191015213849/HolyStand.png/150px-HolyStand.png',
      stand_type: ['None'],
      user_image:
        'https://static.jojowiki.com/images/3/34/latest/20200111152014/Holy_SC_Infobox_Anime.png',
      user: 'Holy Kujo',
      Stand: "Holy's Stand",
      gender: 'Female',
      hair_color: 'Blonde',
      eye_color: 'Green',
    },
  ],
  DiamondIsUnbreakable: [
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/b5/latest/20191015213039/Crazy_Diamond_Infobox_Anime.png/270px-Crazy_Diamond_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/49/latest/20191223040816/Josuke_DU_Infobox_Anime.png/270px-Josuke_DU_Infobox_Anime.png',
      user: 'Josuke Higashikata',
      Stand: 'Crazy Diamond',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/ca/latest/20191015215651/Star_Platinum_SC_Infobox_Anime.png/270px-Star_Platinum_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/3/3a/latest/20200315224152/Jotaro_SC_Infobox_Anime.png/270px-Jotaro_SC_Infobox_Anime.png',
      user: 'Jotaro Kujo',
      Stand: 'Star Platinum',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/ae/latest/20191015213220/The_Hand_Infobox_Anime.png/270px-The_Hand_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/8/80/latest/20191015214628/Okuyasu_Nijimura_Infobox_Anime.png/270px-Okuyasu_Nijimura_Infobox_Anime.png',
      user: 'Okuyasu Nijimura',
      Stand: 'The Hand',
      gender: 'Male',
      hair_color: 'Black & Grey',
      eye_color: 'Brown',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/dc/latest/20191015214640/Echoes_ACT1_DU_Infobox_Anime.png/270px-Echoes_ACT1_DU_Infobox_Anime.png',
      stand_type: [
        'Long-Range (ACT1 & ACT2)',
        'Close-Range (ACT3)',
        'Psychological Assault (ACT1)',
        'Natural Non-Humanoid (ACT1)',
        'Artificial Humanoid (ACT2 & ACT3)',
        'Evolved',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/9b/latest/20191015213236/Koichi_Hirose_Infobox_Anime.png/270px-Koichi_Hirose_Infobox_Anime.png',
      user: 'Koichi Hirose',
      Stand: 'Echoes',
      gender: 'Male',
      hair_color: 'Grey',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/50/latest/20191015214647/Heaven%27s_Door_Infobox_Anime.png/270px-Heaven%27s_Door_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/9e/latest/20191015214721/Rohan_Kishibe_Infobox_Anime.png/270px-Rohan_Kishibe_Infobox_Anime.png',
      user: 'Rohan Kishibe',
      Stand: "Heaven's Door",
      gender: 'Male',
      hair_color: 'Dark Green',
      eye_color: 'Teal',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/d3/latest/20191015212835/Love_Deluxe_Infobox_Anime.png/270px-Love_Deluxe_Infobox_Anime.png',
      stand_type: [
        'Range Irrelevant',
        'Integrated',
        'Materialized',
        'Phenomenon',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/d/d3/latest/20191015215027/Yukako_Yamagishi_Infobox_Anime.png/270px-Yukako_Yamagishi_Infobox_Anime.png',
      user: 'Yukako Yamagishi',
      Stand: 'Love Deluxe',
      gender: 'Female',
      hair_color: 'Black',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/73/latest/20191015213856/Harvest_Infobox_Anime.png/270px-Harvest_Infobox_Anime.png',
      stand_type: [
        'Long-Range',
        'Reconnaissance',
        'Natural Non-Humanoid',
        'Colony',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/fe/latest/20191015215232/Shigechi_Infobox_Anime.png/270px-Shigechi_Infobox_Anime.png',
      user: 'Shigekiyo Yangu',
      Stand: 'Harvest',
      gender: 'Male',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/14/latest/20191015212929/Killer_Queen_Infobox_Anime.png/270px-Killer_Queen_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid', 'Evolved'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5c/latest/20191015215743/Yoshikage_Kira_Original_Infobox_Anime.jpg/270px-Yoshikage_Kira_Original_Infobox_Anime.jpg',
      user: 'Yoshikage Kira',
      Stand: 'Killer Queen',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/ba/latest/20191015214153/Sheer_Heart_Attack_Infobox_Anime.png/270px-Sheer_Heart_Attack_Infobox_Anime.png',
      stand_type: ['Automatic', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5c/latest/20191015215743/Yoshikage_Kira_Original_Infobox_Anime.jpg/270px-Yoshikage_Kira_Original_Infobox_Anime.jpg',
      user: 'Yoshikage Kira',
      Stand: 'Killer Queen',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/cb/latest/20191015213012/Bites_the_Dust_Infobox_Anime.png/270px-Bites_the_Dust_Infobox_Anime.png',
      stand_type: ['Automatic', 'Psychological Assault', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5c/latest/20191015215743/Yoshikage_Kira_Original_Infobox_Anime.jpg/270px-Yoshikage_Kira_Original_Infobox_Anime.jpg',
      user: 'Yoshikage Kira',
      Stand: 'Killer Queen',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/b1/latest/20191015214904/Aqua_Necklace_Infobox_Anime.png/270px-Aqua_Necklace_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Materialized', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/f0/latest/20191015212929/Anjuro_Katagiri_Infobox_Anime.png/270px-Anjuro_Katagiri_Infobox_Anime.png',
      user: 'Anjuro Katagiri',
      Stand: 'Aqua Necklace',
      gender: 'Male',
      hair_color: 'Grey',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/4a/latest/20191015213325/Bad_Company_Infobox_Anime.png/270px-Bad_Company_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Reconnaissance',
        'Natural Humanoid',
        'Colony',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/46/latest/20191015215420/Keicho_Nijimura_Infobox_Anime.png/270px-Keicho_Nijimura_Infobox_Anime.png',
      user: 'Keicho Nijimura',
      Stand: 'Bad Company',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/59/latest/20191015213016/RHCP_Infobox_Anime.png/270px-RHCP_Infobox_Anime.png',
      stand_type: ['Long-Range[2]', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/3/31/latest/20191015215820/Akira_Otoishi_Infobox_Anime.png/270px-Akira_Otoishi_Infobox_Anime.png',
      user: 'Akira Otoishi',
      Stand: 'Red Hot Chili Pepper',
      gender: 'Male',
      hair_color: 'Purple',
      eye_color: 'Magenta',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/5d/latest/20191015215219/The_Lock_Infobox_Anime.png/270px-The_Lock_Infobox_Anime.png',
      stand_type: [
        'Range Irrelevant',
        'Psychological Assault',
        'Artificial Non-Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/93/latest/20191015213632/Tamami_Kobayashi_Infobox_Anime.png/270px-Tamami_Kobayashi_Infobox_Anime.png',
      user: 'Tamami Kobayashi',
      Stand: 'The Lock',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/03/latest/20200117234416/Surface_Infobox_Anime.png/270px-Surface_Infobox_Anime.png',
      stand_type: ['Automatic', 'Materialized', 'Phenomenon', 'Sentient'],
      user_image:
        'https://static.jojowiki.com/images/thumb/0/0b/latest/20191015215226/Toshikazu_Hazamada_Infobox_Anime.png/270px-Toshikazu_Hazamada_Infobox_Anime.png',
      user: 'Toshikazu Hazamada',
      Stand: 'Surface',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/70/latest/20191015212728/Pearl_Jam_Infobox_Anime.png/270px-Pearl_Jam_Infobox_Anime.png',
      stand_type: ['Range Irrelevant', 'Natural Non-Humanoid', 'Colony'],
      user_image:
        'https://static.jojowiki.com/images/thumb/8/87/latest/20191015215304/Tonio_Trussardi_Infobox_Anime.png/270px-Tonio_Trussardi_Infobox_Anime.png',
      user: 'Tonio Trussardi',
      Stand: 'Pearl Jam',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/0a/latest/20191015214921/Hermit_Purple_SC_Infobox_Anime.png/270px-Hermit_Purple_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/6/6e/latest/20200315224059/Joseph_young_BT_Infobox_Anime.png/270px-Joseph_young_BT_Infobox_Anime.png',
      user: 'Joseph Joestar',
      Stand: 'Hermit Purple',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/ad/latest/20191015213828/Achtung_Baby_Infobox_Anime.png/270px-Achtung_Baby_Infobox_Anime.png',
      stand_type: ['Range Irrelevant', 'Integrated', 'Phenomenon'],
      user_image:
        'https://static.jojowiki.com/images/thumb/1/19/latest/20191015213820/Shizuka_Infobox_Anime.png/270px-Shizuka_Infobox_Anime.png',
      user: 'Shizuka Joestar',
      Stand: 'Achtung Baby',
      gender: 'Female',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/3/38/latest/20191015215723/Cinderella_Infobox_Anime.png/270px-Cinderella_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/a/a4/latest/20191015215432/Aya_Tsuji_Infobox_Anime.png/270px-Aya_Tsuji_Infobox_Anime.png',
      user: 'Aya Tsuji',
      Stand: 'Cinderella',
      gender: 'Female',
      hair_color: '',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/00/latest/20191015215111/Atom_Heart_Father_Infobox_Anime.png/270px-Atom_Heart_Father_Infobox_Anime.png',
      stand_type: [
        'Range Irrelevant',
        'Materialized',
        'Psychological Assault',
        'Phenomenon',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/48/latest/20191015214616/Yoshihiro_Kira_Human_Infobox_Anime.png/270px-Yoshihiro_Kira_Human_Infobox_Anime.png',
      user: 'Yoshihiro Kira',
      Stand: 'Atom Heart Father',
      gender: 'Male',
      hair_color: 'Grey/Dark Brown',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/b9/latest/20191015220101/Boy_II_Man_Infobox_Anime.png/270px-Boy_II_Man_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Psychological Assault',
        'Artificial Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/b/b8/latest/20191015214618/Ken_Oyanagi_Infobox_Anime.png/270px-Ken_Oyanagi_Infobox_Anime.png',
      user: 'Ken Oyanagi',
      Stand: 'Boy II Man',
      gender: 'Male',
      hair_color: 'White',
      eye_color: 'Gold',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/55/latest/20191015213033/EWF_Infobox_Anime.png/270px-EWF_Infobox_Anime.png',
      stand_type: ['Range Irrelevant', 'Integrated', 'Phenomenon'],
      user_image:
        'https://static.jojowiki.com/images/thumb/e/e1/latest/20191015220012/Mikitaka_Hazekura_Infobox_Anime.png/270px-Mikitaka_Hazekura_Infobox_Anime.png',
      user: 'Mikitaka Hazekura',
      Stand: 'Earth Wind and Fire',
      gender: 'Male',
      hair_color: 'Platinum Blond',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/07/latest/20191015215616/Highway_Star_Infobox_Anime.png/270px-Highway_Star_Infobox_Anime.png',
      stand_type: [
        'Long-Range',
        'Automatic',
        'Reconnaissance',
        'Natural Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/94/latest/20191015214059/Yuya_Fungami_Infobox_Anime.png/270px-Yuya_Fungami_Infobox_Anime.png',
      user: 'Yuya Fungami',
      Stand: 'Highway Star',
      gender: 'Male',
      hair_color: 'Black and White',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/7d/latest/20191015215812/Stray_Cat_Original_Infobox_Anime.png/270px-Stray_Cat_Original_Infobox_Anime.png',
      stand_type: [
        'Range Irrelevant',
        'Integrated',
        'Materialized',
        'Phenomenon',
        'Sentient',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/0/02/latest/20191015215927/Tama_Infobox_Anime.png/270px-Tama_Infobox_Anime.png',
      user: 'Tama',
      Stand: 'Stray Cat',
      gender: 'Male',
      hair_color: 'Blueish gray (fur)',
      eye_color: 'Gold',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/45/latest/20191015215742/Super_Fly_Infobox_Anime.png/270px-Super_Fly_Infobox_Anime.png',
      stand_type: ['Automatic', 'Materialized', 'Artificial Non-Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/45/latest/20191015214547/Toyohiro_Kanedaichi_Infobox_Anime.png/270px-Toyohiro_Kanedaichi_Infobox_Anime.png',
      user: 'Toyohiro Kanedaichi',
      Stand: 'Super Fly',
      gender: 'Male',
      hair_color: 'Red',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/51/latest/20200321224524/Enigma_Infobox_Anime.png/270px-Enigma_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Psychological Assault',
        'Artificial Humanoid',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/49/latest/20200115220723/Terunosuke_Miyamoto_Infobox_Anime.png/270px-Terunosuke_Miyamoto_Infobox_Anime.png',
      user: 'Terunosuke Miyamoto',
      Stand: 'Enigma',
      gender: 'Male',
      hair_color: 'White',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/8/8e/latest/20191015214358/Cheap_Trick_Infobox_Anime.png/270px-Cheap_Trick_Infobox_Anime.png',
      stand_type: [
        'Automatic',
        'Psychological Assault',
        'Natural Humanoid',
        'Shared',
        'Sentient',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/b/b3/latest/20191015213549/Masazo_Kinoto_Infobox_Anime.png/270px-Masazo_Kinoto_Infobox_Anime.png',
      user: 'Masazo Kinoto',
      Stand: 'Cheap Trick',
      gender: 'Male',
      hair_color: 'Ginger',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/e/e3/latest/20191015213357/Nijimura%27s_Father_Infobox_Anime.png/270px-Nijimura%27s_Father_Infobox_Anime.png',
      stand_type: 'None',
      user_image:
        'https://static.jojowiki.com/images/thumb/e/e3/latest/20191015213357/Nijimura%27s_Father_Infobox_Anime.png/270px-Nijimura%27s_Father_Infobox_Anime.png',
      user: "Nijimura's Father",
      Stand: "Nijimura's Father's Stand",
      gender: 'Male',
    },
  ],
  GoldenWind: [
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/8/81/latest/20191015215219/Gold_Experience_Infobox_Anime.png/270px-Gold_Experience_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/4a/latest/20200306174515/Giorno_Giovanna_Infobox_Anime.png/270px-Giorno_Giovanna_Infobox_Anime.png',
      user: 'Giorno Giovanna',
      Stand: 'Gold Experience',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/78/latest/20191015212734/Sticky_Fingers_Infobox_Anime.png/270px-Sticky_Fingers_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/a/a2/latest/20200306174609/Bruno_Bucciarati_Infobox_Anime.png/270px-Bruno_Bucciarati_Infobox_Anime.png',
      user: 'Bruno Bucciarati',
      Stand: 'Sticky Fingers',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/9/91/latest/20200118001940/Moody_Blues_Infobox_Anime.png/270px-Moody_Blues_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/e/ee/latest/20191205111711/Leone_Abbacchio_Infobox_Anime.png/270px-Leone_Abbacchio_Infobox_Anime.png',
      user: 'Leone Abbacchio',
      Stand: 'Moody Blues',
      gender: 'Male',
      hair_color: 'White',
      eye_color: 'Yellow/Violet',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/b/b9/latest/20191015215329/Sex_Pistols_Infobox_Anime.png/270px-Sex_Pistols_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Natural Humanoid', 'Colony', 'Sentient'],
      user_image:
        'https://static.jojowiki.com/images/thumb/c/c6/latest/20191220050001/Guido_Mista_Infobox_Anime.png/270px-Guido_Mista_Infobox_Anime.png',
      user: 'Guido Mista',
      Stand: 'Sex Pistols',
      gender: 'Male',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/7/7c/latest/20191015220012/Aerosmith_Infobox_Anime.png/270px-Aerosmith_Infobox_Anime.png',
      stand_type: ['Long-Range', 'Artificial Non-Humanoid', 'Reconnaissance'],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/44/latest/20191015213329/Narancia_Ghirga_Infobox_Anime.png/270px-Narancia_Ghirga_Infobox_Anime.png',
      user: 'Narancia Ghirga',
      Stand: 'Aerosmith',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/ca/latest/20191015214140/Purple_Haze_Infobox_Anime.png/270px-Purple_Haze_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/f7/latest/20191015213829/Pannacotta_Fugo_Infobox_Anime.png/270px-Pannacotta_Fugo_Infobox_Anime.png',
      user: 'Pannacotta Fugo',
      Stand: 'Purple Haze',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/2/21/latest/20200118002424/Spice_Girl_Infobox_Anime.png/270px-Spice_Girl_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Natural Humanoid', 'Sentient'],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/fc/latest/20200306174652/Trish_Una_Infobox_Anime.png/270px-Trish_Una_Infobox_Anime.png',
      user: 'Trish Una',
      Stand: 'Spice Girl',
      gender: 'Female',
      hair_color: 'Pink',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/09/latest/20191015214835/Silver_Chariot_SC_Infobox_Anime.png/270px-Silver_Chariot_SC_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/b/ba/latest/20200111152901/Polnareff_SC_Infobox_Anime.png',
      user: 'Jean Pierre Polnareff',
      Stand: 'Silver Chariot',
      gender: 'Male',
      hair_color: 'Silver',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/12/latest/20191015212738/Chariot_Requiem_Infobox_Anime.png/270px-Chariot_Requiem_Infobox_Anime.png',
      stand_type: ['Automatic', 'Evolved'],
      user_image:
        'https://static.jojowiki.com/images/b/ba/latest/20200111152901/Polnareff_SC_Infobox_Anime.png',
      user: 'Jean Pierre Polnareff',
      Stand: 'Silver Chariot Requiem',
      gender: 'Male',
      hair_color: 'Silver',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/19/latest/20191126085620/GER_Infobox_Anime.png/270px-GER_Infobox_Anime.png',
      stand_type: [
        'Close-Range',
        'Range Irrelevant',
        'Natural Humanoid',
        'Evolved',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/4/4a/latest/20200306174515/Giorno_Giovanna_Infobox_Anime.png/270px-Giorno_Giovanna_Infobox_Anime.png',
      user: 'Giorno Giovanna',
      Stand: 'Gold Experience Requiem',
      gender: 'Male',
      hair_color: 'Black',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/dc/latest/20191015214640/Echoes_ACT1_DU_Infobox_Anime.png/270px-Echoes_ACT1_DU_Infobox_Anime.png',
      stand_type: [
        'Long-Range (ACT1 & ACT2)',
        'Close-Range (ACT3)',
        'Psychological Assault (ACT1)',
        'Natural Non-Humanoid (ACT1)',
        'Artificial Humanoid (ACT2 & ACT3)',
        'Evolved',
      ],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/9b/latest/20191015213236/Koichi_Hirose_Infobox_Anime.png/270px-Koichi_Hirose_Infobox_Anime.png',
      user: 'Koichi Hirose',
      Stand: 'Echoes',
      gender: 'Male',
      hair_color: 'Grey',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/1/17/latest/20191015215515/Black_Sabbath_Infobox_Anime.png/270px-Black_Sabbath_Infobox_Anime.png',
      stand_type: ['Automatic', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/ff/latest/20191015213339/Polpo_Infobox_Anime.png/270px-Polpo_Infobox_Anime.png',
      user: 'Polpo',
      Stand: 'Black Sabbath',
      gender: 'Male',
      eye_color: 'Green irises',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/6/69/latest/20191015214657/Soft_Machine_Infobox_Anime.png/270px-Soft_Machine_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/97/latest/20191015213700/Mario_Zucchero_Infobox_Anime.png/270px-Mario_Zucchero_Infobox_Anime.png',
      user: 'Mario Zucchero',
      Stand: 'Soft Machine',
      gender: 'Male',
      hair_color: 'Lime Green',
      eye_color: 'Dark Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/4/49/latest/20191015220058/Kraft_Work_Infobox_Anime.png/270px-Kraft_Work_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/6/6e/latest/20200419195908/Sale_Anime_Infobox.png/270px-Sale_Anime_Infobox.png',
      user: 'Sale',
      Stand: 'Kraft Work',
      gender: 'Male',
      hair_color: 'Ginger',
      eye_color: 'Magenta',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/5/56/latest/20191015215305/Little_Feet_Infobox_Anime.png/270px-Little_Feet_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Artificial Humanoid'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5a/latest/20191015215908/Formaggio_Infobox_Anime.png/270px-Formaggio_Infobox_Anime.png',
      user: 'Formaggio',
      Stand: 'Little Feet',
      gender: 'Male',
      hair_color: 'Gray',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/e/eb/latest/20191015213027/Man_in_the_Mirror_Infobox_Anime.png/270px-Man_in_the_Mirror_Infobox_Anime.png',
      stand_type: ['Long-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/f/fd/latest/20191015213559/Illuso_Infobox_Anime.png/270px-Illuso_Infobox_Anime.png',
      user: 'Illuso',
      Stand: 'Man in the Mirror',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Red',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/d/da/latest/20191015213903/Mr.President_Infobox_Anime.png/270px-Mr.President_Infobox_Anime.png',
      stand_type: ['Range Irrelevant', 'Integrated', 'Phenomenon'],
      user_image:
        'https://static.jojowiki.com/images/thumb/9/98/latest/20191015213522/Coco_jumbo_Infobox_Anime.png/270px-Coco_jumbo_Infobox_Anime.png',
      user: 'Coco Jumbo',
      Stand: 'Mr.President',
      eye_color: 'Dark Cyan',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/e/ec/latest/20191015214028/Beach_Boy_Infobox_Anime.png/270px-Beach_Boy_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Reconnaissance'],
      user_image:
        'https://static.jojowiki.com/images/thumb/0/06/latest/20191015214506/Pesci_Infobox_Anime.png/270px-Pesci_Infobox_Anime.png',
      user: 'Pesci',
      Stand: 'Beach Boy',
      gender: 'Male',
      hair_color: 'Green',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/2/29/latest/20191015215829/The_Grateful_Dead_Infobox_Anime.png/270px-The_Grateful_Dead_Infobox_Anime.png',
      stand_type: ['Long-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5f/latest/20191015212749/Prosciutto_Infobox_Anime.png/270px-Prosciutto_Infobox_Anime.png',
      user: 'Prosciutto',
      Stand: 'The Grateful Dead',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/c9/latest/20200118011402/Baby_Face_PC_Infobox_Anime.png/270px-Baby_Face_PC_Infobox_Anime.png',
      stand_type: ['Automatic', 'Sentient'],
      user_image:
        'https://static.jojowiki.com/images/thumb/2/21/latest/20191015212907/Melone_Infobox_Anime.jpg/270px-Melone_Infobox_Anime.jpg',
      user: 'Melone',
      Stand: 'Baby Face',
      gender: 'Male',
      hair_color: 'Lavender',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/a9/latest/20191015215835/White_Album_Infobox_Anime.png/270px-White_Album_Infobox_Anime.png',
      stand_type: ['Close-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5d/latest/20191205094030/Ghiaccio_Infobox_Anime.png/270px-Ghiaccio_Infobox_Anime.png',
      user: 'Ghiaccio',
      Stand: 'White Album',
      gender: 'Male',
      hair_color: 'Blue',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/6/66/latest/20191015214551/Clash_Infobox_Anime.png/270px-Clash_Infobox_Anime.png',
      stand_type: ['Long-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/a/a7/latest/20191015214033/Squalo_Infobox_Anime.png/270px-Squalo_Infobox_Anime.png',
      user: 'Squalo',
      Stand: 'Clash',
      gender: 'Male',
      hair_color: 'Orange',
      eye_color: 'Blue',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/6/68/latest/20191015214524/Talking_Head_Infobox_Anime.png/270px-Talking_Head_Infobox_Anime.png',
      stand_type: ['Long-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/e/eb/latest/20191016205644/Tiziano_Infobox_Anime.PNG/270px-Tiziano_Infobox_Anime.PNG',
      user: 'Tiziano',
      Stand: 'Talking Head',
      gender: 'Male',
      hair_color: 'Blond',
      eye_color: 'Gold',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/9/9d/latest/20191015215533/Notorious_B.I.G_Normal_Infobox_Anime.jpg/270px-Notorious_B.I.G_Normal_Infobox_Anime.jpg',
      stand_type: ['Automatic'],
      user_image:
        'https://static.jojowiki.com/images/thumb/e/e0/latest/20191015215156/Carne_Infobox_Anime.png/270px-Carne_Infobox_Anime.png',
      user: 'Carne',
      Stand: 'Notorious B.I.G',
      gender: 'Male',
      hair_color: 'Pink',
      eye_color: 'Black',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/c0/latest/20191015214533/Metallica_Infobox_Anime.png/270px-Metallica_Infobox_Anime.png',
      stand_type: ['Close-Range', 'Colony'],
      user_image:
        'https://static.jojowiki.com/images/thumb/2/2a/latest/20200723190733/Risotto_Nero_Infobox_Anime.png/270px-Risotto_Nero_Infobox_Anime.png',
      user: 'Risotto Nero',
      Stand: 'Metallica',
      gender: 'Male',
      hair_color: 'Grey',
      eye_color: 'Black sclera / Red irises',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/a/a4/latest/20191015214420/Green_Day_Infobox_Anime.png/270px-Green_Day_Infobox_Anime.png',
      stand_type: ['Close-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/2/25/latest/20191015213948/Cioccolata_Infobox_Anime.png/270px-Cioccolata_Infobox_Anime.png',
      user: 'Cioccolata',
      Stand: 'Green Day',
      gender: 'Male',
      hair_color: 'Green',
      eye_color: 'Green',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/0/06/latest/20191015212931/Oasis_Infobox_Anime.png/270px-Oasis_Infobox_Anime.png',
      stand_type: ['Close-Range'],
      user_image:
        'https://static.jojowiki.com/images/thumb/d/d1/latest/20191015213308/Secco_Infobox_Anime.png/270px-Secco_Infobox_Anime.png',
      user: 'Secco',
      Stand: 'Oasis',
      gender: 'Male',
      eye_color: 'Purple',
    },
    {
      stand_image:
        'https://static.jojowiki.com/images/thumb/c/c5/latest/20191015214244/Rolling_Stones_Infobox_Anime.png/270px-Rolling_Stones_Infobox_Anime.png',
      stand_type: ['Automatic'],
      user_image:
        'https://static.jojowiki.com/images/thumb/5/5d/latest/20191015220011/Scolippi_Infobox_Anime.png/270px-Scolippi_Infobox_Anime.png',
      user: 'Scolippi',
      Stand: 'Rolling Stones',
      gender: 'Male',
      hair_color: 'Purple',
      eye_color: 'Green',
    },
  ],
};

console.log();
const series = Object.keys(data);
// console.log(series, typeof series); returns an array with the series titles only!

// let { StardustCrusaders, DiamondIsUnbreakable, GoldenWind } = data;
// const seriesArray = [StardustCrusaders, DiamondIsUnbreakable, GoldenWind];
// console.log(seriesArray, typeof seriesArray);

function Home() {
  return <h1>Home</h1>;
}
function StandList() {
  const { categoryId } = useParams();
  const { url, path } = useRouteMatch();
  // console.log(url, path, categoryId, data);

  console.log(data[categoryId]);

  // const seriesStand = data.find(key);

  return (
    <>
      <h2>{categoryId}</h2>
      <p>{data[categoryId].length} stands</p>
    </>
  );
}
function Series() {
  const { url, path } = useRouteMatch();
  console.log(url, path);
  return (
    <>
      <h1>Series</h1>
      <ul>
        {series.map((serie, i) => (
          <li key={i}>
            <Link to={`/series/${serie}`}>{serie}</Link>
          </li>
        ))}
      </ul>

      <hr />
      <Route exact path={`${path}/:categoryId`}>
        <StandList />
      </Route>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> Home Page with cool Splash Image</Link>
          </li>
          <li>
            <Link to="/series"> Series List</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
      </div>
    </Router>
  );
}

// function Movie() {
//   const { categoryId, movieId } = useParams();
//   const movie = movieCategories
//     .find(({ id }) => id === categoryId)
//     .movies.find(({ id }) => id === movieId);

//   const { title, poster } = movie;
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={poster} alt={title} height={300} width={300} />
//     </div>
//   );
// }

// function MovieList() {
//   const { categoryId } = useParams();
//   const { url, path } = useRouteMatch();
//   console.log('url in MovieList', url); // 💡 Use url for nested links
//   console.log('path in MovieList', path); // 💡 Use path for nested routes

//   const category = movieCategories.find(({ id }) => id === categoryId);
//   console.log('category', category);
//   return (
//     <div>
//       <h2>{category.category}</h2>
//       <p>{category.description}</p>
//       <ul>
//         {category.movies.map((movie) => {
//           return (
//             <li key={movie.id}>
//               <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
//             </li>
//           );
//         })}
//       </ul>

//       <hr />

//       <Route path={`${path}/:movieId`}>
//         <Movie />
//       </Route>
//     </div>
//   );
// }

// function SeriesList() {
//   // Custom Hook we get from react router dom for nested routing
//   const { url, path } = useRouteMatch();
//   console.log('url in CategoryList', url); // 💡 Use url for nested links
//   console.log('path in CategoryList', path); // 💡 Use path for nested routes

//   return (
//     <div>
//       <h1>Series</h1>
//       <ul>
//         {seriesStands.map((series, i) => {
//           return (
//             <li key={i}>
//               {/* A nested link that's using the `url` from `useRouteMatch()`  */}
//               <Link to={``}>{series}</Link>
//             </li>
//           );
//         })}
//       </ul>

//       <hr />

//       {/* The URL we want to match: /category/:categoryId */}
//       <Route path={`${path}/:categoryId`}>
//         <MovieList />
//       </Route>
//     </div>
//   );
// }

// function Home() {
//   return <h1>Home</h1>;
// }

// export default function App() {
//   return (
//     <Router>
//       <div style={{ width: 1000, margin: '0 auto' }}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/categories">Categories</Link>
//           </li>
//         </ul>
//         <hr />
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/categories">
//           <CategoryList />
//         </Route>
//       </div>
//     </Router>
//   );
// }
