// one character per line: "Name|image url". the url is optional — drop it and the card
// just shows the name. images are wikipedia thumbnails, hotlinked.
const cat = (id, name, emoji, s) => ({
  id, name, emoji,
  items: s.trim().split('\n').map(x => x.trim()).filter(Boolean).map(l => {
    const i = l.indexOf('|');
    return i < 0 ? { name: l } : { name: l.slice(0, i), img: l.slice(i + 1) };
  })
});

const CATEGORIES = [

cat('music', 'Music', '🎤', `
Taylor Swift|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/500px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png
Drake|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Drake_at_The_Carter_Effect_2017_%2836818935200%29_%28cropped%29.jpg/500px-Drake_at_The_Carter_Effect_2017_%2836818935200%29_%28cropped%29.jpg
Beyoncé|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2810_of_118%29_%2852946364598%29_%28best_crop%29.jpg/500px-Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2810_of_118%29_%2852946364598%29_%28best_crop%29.jpg
Bad Bunny|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/500px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg
Billie Eilish|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg/500px-BillieEilishO2140725-39_-_54665577407_%28cropped%29.jpg
Ariana Grande|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Ariana_Grande_promoting_Wicked_%282024%29.jpg/500px-Ariana_Grande_promoting_Wicked_%282024%29.jpg
The Weeknd|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Portrait_by_Brian_Ziff.jpg/500px-The_Weeknd_Portrait_by_Brian_Ziff.jpg
Travis Scott|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Travis_Scott_sig.svg/500px-Travis_Scott_sig.svg.png
SZA|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/KendrickSZASPurs230725-19_-_54683179509_%28cropped%29_%28cropped%29.jpg/500px-KendrickSZASPurs230725-19_-_54683179509_%28cropped%29_%28cropped%29.jpg
Doja Cat|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Doja_Cat_x_Amazon1.1_%28cropped%29.jpg/500px-Doja_Cat_x_Amazon1.1_%28cropped%29.jpg
Kendrick Lamar|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg/500px-KendrickSZASPurs230725-144_%28cropped%29_desaturated.jpg
Nicki Minaj|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Nicki_Minaj_2025_%283x4_cropped%29.jpg/500px-Nicki_Minaj_2025_%283x4_cropped%29.jpg
Rihanna|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/500px-Rihanna_Fenty_2018.png
Post Malone|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Post_Malone_July_2021_%28cropped%29.jpg/500px-Post_Malone_July_2021_%28cropped%29.jpg
Olivia Rodrigo|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Glasto2025-546_%28cropped%29_2.jpg/500px-Glasto2025-546_%28cropped%29_2.jpg
Harry Styles|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/HarryStylesWembley170623_%2865_of_93%29_%2852982678051%29_%28cropped_2%29.jpg/500px-HarryStylesWembley170623_%2865_of_93%29_%2852982678051%29_%28cropped_2%29.jpg
Dua Lipa|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Dua_Lipa-69798_%28cropped%29.jpg/500px-Dua_Lipa-69798_%28cropped%29.jpg
Lil Nas X|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Lil_Nas_X_Talks_About_Gaining_His_Father%27s_Acceptance%2C_Growing_Up_in_Atlanta%2C_%26_FINDING_HIMSELF_7-32_screenshot_%28headshot%29.jpg/500px-Lil_Nas_X_Talks_About_Gaining_His_Father%27s_Acceptance%2C_Growing_Up_in_Atlanta%2C_%26_FINDING_HIMSELF_7-32_screenshot_%28headshot%29.jpg
Cardi B|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Cardi_B_at_2026_Essence_Festival_of_Culture_02_%28cropped%29_%28cropped%29.jpg/500px-Cardi_B_at_2026_Essence_Festival_of_Culture_02_%28cropped%29_%28cropped%29.jpg
Kanye West|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/500px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg
Eminem|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/500px-Eminem_2021_Color_Corrected.jpg
Snoop Dogg|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Snoop_Dogg%2C_WrestleMania_XL_%28cropped%29_%28cropped%29.jpg/500px-Snoop_Dogg%2C_WrestleMania_XL_%28cropped%29_%28cropped%29.jpg
Lady Gaga|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg/500px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg
Justin Bieber|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/P20260719DT-1213_President_Donald_J._Trump_and_First_Lady_Melania_Trump_attend_the_FIFA_World_Cup_Final_%28cropped_2%29.jpg/500px-P20260719DT-1213_President_Donald_J._Trump_and_First_Lady_Melania_Trump_attend_the_FIFA_World_Cup_Final_%28cropped_2%29.jpg
Selena Gomez|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_10_%28cropped%29.jpg/500px-Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_10_%28cropped%29.jpg
Miley Cyrus|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg/500px-Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg
Ice Spice|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Ice_Spice%2C_November_2024_1_%28Cropped%29.jpg/500px-Ice_Spice%2C_November_2024_1_%28Cropped%29.jpg
Playboi Carti|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Playboi_Carti%2C_Clout_Festival_2024_05_%28cropped%29.jpg/500px-Playboi_Carti%2C_Clout_Festival_2024_05_%28cropped%29.jpg
21 Savage|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/21_Savage_2018.jpg/500px-21_Savage_2018.jpg
Tyler, the Creator|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Tyler_The_Creator_Toronto_2025_%28cropped%29.jpg/500px-Tyler_The_Creator_Toronto_2025_%28cropped%29.jpg
Frank Ocean|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Frank_Ocean_2022_Blonded.jpg/500px-Frank_Ocean_2022_Blonded.jpg
Adele|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Adele_2016.jpg/500px-Adele_2016.jpg
Bruno Mars|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/BrunoMars24KMagicWorldTourLive_%28cropped%29.jpg/500px-BrunoMars24KMagicWorldTourLive_%28cropped%29.jpg
Sabrina Carpenter|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Sabrina_Carpenter_-_O2_Arena_2025_-_086_%28cropped_2%29.jpg/500px-Sabrina_Carpenter_-_O2_Arena_2025_-_086_%28cropped_2%29.jpg
Chappell Roan|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/ChappellRoanRockES200825-198_%28cropped%29.jpg/500px-ChappellRoanRockES200825-198_%28cropped%29.jpg
Charli XCX|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Charli_xcx_at_Berlinale_2026-1.jpg/500px-Charli_xcx_at_Berlinale_2026-1.jpg
Lana Del Rey|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/LanaDRPrimavera310524_%2832_of_147%29_%2853765476960%29_%28cropped%29.jpg/500px-LanaDRPrimavera310524_%2832_of_147%29_%2853765476960%29_%28cropped%29.jpg
Metro Boomin|https://upload.wikimedia.org/wikipedia/commons/8/85/Metro_Boomin_November_2025.jpg
Central Cee|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Central_cee-5.jpg/500px-Central_cee-5.jpg
Burna Boy|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Untold_2024_-Burna_Boy_%2853926047977%29_%28cropped%29.jpg/500px-Untold_2024_-Burna_Boy_%2853926047977%29_%28cropped%29.jpg
Karol G|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_15.jpg
Peso Pluma|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Peso_Pluma%2C_performing_in_Monterrey_%282024-09-24%29_%281%29.png/500px-Peso_Pluma%2C_performing_in_Monterrey_%282024-09-24%29_%281%29.png
Jungkook|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Jung_Kook_of_BTS%2C_February_12%2C_2026_%281%29.png/500px-Jung_Kook_of_BTS%2C_February_12%2C_2026_%281%29.png
Lisa from BLACKPINK|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/20240314_Lisa_Manoban_07.jpg/500px-20240314_Lisa_Manoban_07.jpg
Shakira|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/500px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg
Ed Sheeran|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Ed_Sheeran-6886_%28cropped_2%29.jpg/500px-Ed_Sheeran-6886_%28cropped_2%29.jpg
Nicki Nicole|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Nicki_Nicole_en_KEXP_%2852380006338%29_%28cropped%29.jpg/500px-Nicki_Nicole_en_KEXP_%2852380006338%29_%28cropped%29.jpg
Future|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Zeitpyramide_2023_B.jpg/500px-Zeitpyramide_2023_B.jpg
Lil Baby|https://upload.wikimedia.org/wikipedia/commons/4/46/Lil_Baby_2023.png
Megan Thee Stallion|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Megan_Thee_Stallion_Adweek_pose.jpg/500px-Megan_Thee_Stallion_Adweek_pose.jpg
`),

cat('screen', 'Movies & TV', '🎬', `
Spider-Man|https://thumb.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png
Batman|https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg
Iron Man|https://thumb.wikimedia.org/wikipedia/en/thumb/4/47/Iron_Man_%28circa_2018%29.png/250px-Iron_Man_%28circa_2018%29.png
Deadpool|https://upload.wikimedia.org/wikipedia/en/c/ca/Deadpool.png
Harry Potter|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Harry_Potter_logo.svg/500px-Harry_Potter_logo.svg.png
Hermione Granger|https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Hermione_Granger_poster.jpg/250px-Hermione_Granger_poster.jpg
Darth Vader|https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Darth_Vader_in_The_Empire_Strikes_Back.jpg/250px-Darth_Vader_in_The_Empire_Strikes_Back.jpg
Yoda|https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png
The Joker|https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Batman_Three_Jokers.jpg/250px-Batman_Three_Jokers.jpg
Wednesday Addams|https://upload.wikimedia.org/wikipedia/commons/6/61/Wednesday_Addams_1964.jpg
Eleven from Stranger Things|https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Eleven_%28Stranger_Things_5%29.png/250px-Eleven_%28Stranger_Things_5%29.png
Walter White
Jesse Pinkman|https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Jesse_Pinkman_S5B.png/250px-Jesse_Pinkman_S5B.png
Tony Soprano|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Tony_Soprano_%28The_Sopranos_Family_Tree%29_cropped.jpg/500px-Tony_Soprano_%28The_Sopranos_Family_Tree%29_cropped.jpg
Michael Scott|https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png
Dwight Schrute|https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Dwight_Schrute.jpg/250px-Dwight_Schrute.jpg
Ross Geller|https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/David_Schwimmer_as_Ross_Geller.jpg/250px-David_Schwimmer_as_Ross_Geller.jpg
Joey Tribbiani|https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg/250px-Matt_LeBlanc_as_Joey_Tribbiani.jpg
Sheldon Cooper|https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Sheldon_and_Young_Sheldon.jpg/250px-Sheldon_and_Young_Sheldon.jpg
Barbie|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Barbie_Logo.svg/500px-Barbie_Logo.svg.png
Ken|https://upload.wikimedia.org/wikipedia/en/d/d4/Ken_doll_early_1960s_swimsuit_and_other_clothing_accessories.png
Shrek|https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png
Gollum|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Gollum_at_Wellington_Airport.jpg/500px-Gollum_at_Wellington_Airport.jpg
Jack Sparrow|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Johnny_Depp_as_Captain_Jack_Sparrow_in_Queensland%2C_Australia.jpg/500px-Johnny_Depp_as_Captain_Jack_Sparrow_in_Queensland%2C_Australia.jpg
Katniss Everdeen|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Katniss_Everdeen_%28Jennifer_Lawrence%29_figure_at_Madame_Tussauds_London_%2831139647115%29.jpg/500px-Katniss_Everdeen_%28Jennifer_Lawrence%29_figure_at_Madame_Tussauds_London_%2831139647115%29.jpg
Hannibal Lecter|https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Hannibal_Lecter_in_Silence_of_the_Lambs.jpg/330px-Hannibal_Lecter_in_Silence_of_the_Lambs.jpg
Forrest Gump|https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg
Neo|https://upload.wikimedia.org/wikipedia/en/c/c6/NeoTheMatrix.jpg
John Wick|https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/John_Wick_Keanu.jpeg/250px-John_Wick_Keanu.jpeg
Thanos|https://upload.wikimedia.org/wikipedia/en/b/b7/Thanos_%28Infobox_image%29.png
Loki|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Processed_SAM_loki.jpg/500px-Processed_SAM_loki.jpg
Groot|https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Groot.png/250px-Groot.png
Gandalf|https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gandalf_from_The_Trolls_are_Turned_to_Stone_-_J.R.R_Tolkien.jpg/250px-Gandalf_from_The_Trolls_are_Turned_to_Stone_-_J.R.R_Tolkien.jpg
Daenerys Targaryen|https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg/330px-Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg
Jon Snow|https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/250px-Jon_Snow_Season_8.png
Joffrey Baratheon|https://thumb.wikimedia.org/wikipedia/en/thumb/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg/250px-Joffrey_Baratheon-Jack_Gleeson.jpg
Rue from Euphoria|https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Rue_Bennett.png/250px-Rue_Bennett.png
Joe Goldberg from You|https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Penn_Badgley_as_Joe_Goldberg_1.png/250px-Penn_Badgley_as_Joe_Goldberg_1.png
Beth Harmon|https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/BethHarmon.jpg/250px-BethHarmon.jpg
Geralt of Rivia|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Geralt.jpg/500px-Geralt.jpg
Homelander|https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Homelander-comic-vs-tv-series.jpg/330px-Homelander-comic-vs-tv-series.jpg
Ted Lasso|https://thumb.wikimedia.org/wikipedia/en/thumb/7/73/Tedlassotitlecard.jpg/330px-Tedlassotitlecard.jpg
Marty McFly|https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg/250px-Michael_J._Fox_as_Marty_McFly_in_Back_to_the_Future%2C_1985.jpg
Indiana Jones|https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Indiana_Jones_logo.svg/330px-Indiana_Jones_logo.svg.png
Ellie from The Last of Us|https://upload.wikimedia.org/wikipedia/en/9/96/Ellie_in_The_Last_of_Us_Part_II.png
Baby Yoda|https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Grogu_%28Star_Wars%29.jpg/250px-Grogu_%28Star_Wars%29.jpg
Maeve from Sex Education|https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Caerleon_Campus.jpg/500px-Caerleon_Campus.jpg
Nate Jacobs|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Euphoria_sigla.png/500px-Euphoria_sigla.png
Villanelle|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Ferdinand_Chaigneau_-_Troupeau_de_moutons.jpg/500px-Ferdinand_Chaigneau_-_Troupeau_de_moutons.jpg
Tyler Durden|https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/The_Narrator_%28Edward_Norton%2C_left%29_and_Tyler_Durden_%28Brad_Pitt%2C_right%29_from_Fight_Club_%281999%29.jpg/330px-The_Narrator_%28Edward_Norton%2C_left%29_and_Tyler_Durden_%28Brad_Pitt%2C_right%29_from_Fight_Club_%281999%29.jpg
Regina George|https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Regina_George.jpg/250px-Regina_George.jpg
Elle Woods|https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Elle_Woods.jpg/250px-Elle_Woods.jpg
Miranda Priestly|https://upload.wikimedia.org/wikipedia/en/a/a6/Miranda_Priestly.png
Gru|https://upload.wikimedia.org/wikipedia/en/0/09/Gru_from_DM4.png
`),

cat('anime', 'Anime & Gaming', '🎮', `
Goku|https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/GokumangaToriyama.png/250px-GokumangaToriyama.png
Naruto Uzumaki|https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/NarutoUzumaki.png/250px-NarutoUzumaki.png
Sasuke Uchiha|https://thumb.wikimedia.org/wikipedia/en/thumb/4/42/SasukeKishimoto.jpg/250px-SasukeKishimoto.jpg
Monkey D. Luffy|https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png
Roronoa Zoro|https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Roronoa_Zoro.jpg/250px-Roronoa_Zoro.jpg
Eren Yeager|https://upload.wikimedia.org/wikipedia/en/f/f0/ErenYeagerIsayama.png
Levi Ackerman
Light Yagami|https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Light_from_Death_Note.jpg/250px-Light_from_Death_Note.jpg
L from Death Note|https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/L_from_Death_Note.png/250px-L_from_Death_Note.png
Tanjiro Kamado|https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Tanjirou_manga.png/250px-Tanjirou_manga.png
Nezuko|https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/NezukoKamado.png/250px-NezukoKamado.png
Gojo Satoru|https://upload.wikimedia.org/wikipedia/en/thumb/9/96/SatoruGojomanga.png/250px-SatoruGojomanga.png
Yuji Itadori|https://upload.wikimedia.org/wikipedia/en/2/27/Yuji_Itadori.png
Saitama|https://upload.wikimedia.org/wikipedia/en/9/98/SaitamaWikipediapage.png
Ash Ketchum|https://upload.wikimedia.org/wikipedia/en/e/e4/Ash_Ketchum_Journeys.png
Pikachu|https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/250px-Pok%C3%A9mon_Pikachu_art.png
Vegeta|https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Vegeta_Dragon_Ball.jpg/250px-Vegeta_Dragon_Ball.jpg
Deku|https://upload.wikimedia.org/wikipedia/en/d/db/Izuku_Midoriya_%28My_Hero_Academia_character%29.png
Bakugo|https://upload.wikimedia.org/wikipedia/en/0/02/BakugoMHAVol13.png
Sailor Moon|https://upload.wikimedia.org/wikipedia/en/2/2b/Sailor_Moon_01.jpg
Totoro|https://upload.wikimedia.org/wikipedia/en/thumb/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg/250px-My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg
Spike Spiegel|https://upload.wikimedia.org/wikipedia/en/f/f6/Spike_Spiegel_as_drawn_by_the_creators.jpg
Edward Elric|https://upload.wikimedia.org/wikipedia/en/b/b5/Edward85as.JPG
Mario|https://thumb.wikimedia.org/wikipedia/en/thumb/5/5c/Mario_by_Shigehisa_Nakaue.png/250px-Mario_by_Shigehisa_Nakaue.png
Luigi
Princess Peach|https://upload.wikimedia.org/wikipedia/en/1/16/Princess_Peach_Stock_Art.png
Bowser|https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Bowser_by_Shigehisa_Nakaue.png/330px-Bowser_by_Shigehisa_Nakaue.png
Link|https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Link_%28Hyrule_Historia%29.png/250px-Link_%28Hyrule_Historia%29.png
Zelda|https://upload.wikimedia.org/wikipedia/en/6/6e/Link_to_the_Past_Zelda.png
Kirby|https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Kirby_Nintendo.png/330px-Kirby_Nintendo.png
Sonic the Hedgehog|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Sonic_The_Hedgehog.svg/500px-Sonic_The_Hedgehog.svg.png
Master Chief|https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png
Kratos|https://upload.wikimedia.org/wikipedia/en/2/2f/Kratos_PS4.png
Lara Croft|https://upload.wikimedia.org/wikipedia/en/a/a8/LaraCroftInfobox.png
Steve from Minecraft|https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Minecraft_Zombie.png/60px-Minecraft_Zombie.png
A Creeper|https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Minecraft_Zombie.png/60px-Minecraft_Zombie.png
The Impostor from Among Us|https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Among_Us_cover_art.jpg/250px-Among_Us_cover_art.jpg
Arthur Morgan|https://upload.wikimedia.org/wikipedia/en/a/ac/Arthur_Morgan_-_Red_Dead_Redemption_2.png
Doomguy|https://upload.wikimedia.org/wikipedia/en/f/fc/Doom_Slayer.png
Pac-Man|https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Pac_flyer.png/250px-Pac_flyer.png
Donkey Kong|https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Donkey_Kong_character.png/250px-Donkey_Kong_character.png
Solid Snake|https://upload.wikimedia.org/wikipedia/en/e/ed/Solid_Snake_MGS2_-_Legacy_Collection.png
Cloud Strife|https://upload.wikimedia.org/wikipedia/en/9/9e/Cloud_Strife.png
Sephiroth|https://upload.wikimedia.org/wikipedia/commons/d/d5/Ktreewnames.png
Ryu|https://upload.wikimedia.org/wikipedia/en/5/50/RyuStreetFighterTwoHadoken.png
Scorpion from Mortal Kombat|https://upload.wikimedia.org/wikipedia/en/a/a2/MK1ScorpionRender.png
Sub-Zero|https://upload.wikimedia.org/wikipedia/en/7/79/Sub-Zero_John_Tobias_1996_Art.webp
Jinx from Arcane|https://upload.wikimedia.org/wikipedia/en/a/ad/Jinx-artwork-lol.png
Crash Bandicoot|https://upload.wikimedia.org/wikipedia/commons/2/22/Crash_bandicoot_logo.png
`),

cat('internet', 'Internet & Streamers', '📱', `
MrBeast|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/MrBeast_in_2026_%28cropped_4%29.png/500px-MrBeast_in_2026_%28cropped_4%29.png
PewDiePie|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Pewdiepie_head_shot.jpg/500px-Pewdiepie_head_shot.jpg
Kai Cenat|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Kai_Cenat_July_2025.jpg/500px-Kai_Cenat_July_2025.jpg
IShowSpeed|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/IShowSpeed_at_Chinatown_%28Portrait%29_04.jpg/500px-IShowSpeed_at_Chinatown_%28Portrait%29_04.jpg
Ninja|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Hokusai-sketches---hokusai-manga-vol6-crop.jpg/500px-Hokusai-sketches---hokusai-manga-vol6-crop.jpg
Pokimane|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Pokimane_sig.svg/500px-Pokimane_sig.svg.png
Charli D'Amelio|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Charli_D%27Amelio_at_KCA_2022.jpg/500px-Charli_D%27Amelio_at_KCA_2022.jpg
Khaby Lame|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg/500px-Khaby_Lame%2C_Nov_2025_%28cropped1%29.jpg
Addison Rae|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/LanaWembley030725-3_%28cropped%29.jpg/500px-LanaWembley030725-3_%28cropped%29.jpg
Dream|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/A_dream_%28BM_1868%2C0808.9057%29.jpg/500px-A_dream_%28BM_1868%2C0808.9057%29.jpg
Markiplier|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Markiplier_in_We_Tried_Peanut_Free_Candy_from_YouTube_at_0-1-16_%28cropped%29.png/500px-Markiplier_in_We_Tried_Peanut_Free_Candy_from_YouTube_at_0-1-16_%28cropped%29.png
Jacksepticeye|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Jacksepticeye_by_Gage_Skidmore_%283x4_cropped%29.jpg/500px-Jacksepticeye_by_Gage_Skidmore_%283x4_cropped%29.jpg
Logan Paul|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Logan_Paul_RR25_%28cropped%29.jpg/500px-Logan_Paul_RR25_%28cropped%29.jpg
Jake Paul|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Jake_Paul_March_2026_%283x4_cropped%29.jpg/500px-Jake_Paul_March_2026_%283x4_cropped%29.jpg
KSI|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/KSI_in_2024_%282%29.png/500px-KSI_in_2024_%282%29.png
Emma Chamberlain|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Emma_Chamberlain_for_Chamberlain_Coffee%2C_2020_%281%29.png/500px-Emma_Chamberlain_for_Chamberlain_Coffee%2C_2020_%281%29.png
James Charles|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/James_Charles_-_GLAAD_Media_Awards_2024_%28cropped%29.png/500px-James_Charles_-_GLAAD_Media_Awards_2024_%28cropped%29.png
Jeffree Star|https://upload.wikimedia.org/wikipedia/commons/1/1a/Jeffree_Star_Rupaul_Dragcon_2018-337_%2841377487274%29_%28cropped%29.jpg
Corpse Husband|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Corpse_Husband_signature_%28cropped%29.svg/500px-Corpse_Husband_signature_%28cropped%29.svg.png
Dr Disrespect|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Dr_DisRespect_2018_%284x5_cropped%29.jpg/500px-Dr_DisRespect_2018_%284x5_cropped%29.jpg
xQc|https://upload.wikimedia.org/wikipedia/commons/d/d7/XQc_July_4_2023.jpg
Adin Ross|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Adin_Ross_in_2025.png/500px-Adin_Ross_in_2025.png
Casey Neistat|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Casey_Neistat.jpg/500px-Casey_Neistat.jpg
Marques Brownlee|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Marques_Brownlee_cropped.jpg/500px-Marques_Brownlee_cropped.jpg
Liza Koshy|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Liza_Koshy_on_Pretty_Big_Deal.png/500px-Liza_Koshy_on_Pretty_Big_Deal.png
David Dobrik|https://upload.wikimedia.org/wikipedia/commons/8/8c/DavidDobrikAMMF2019_%28cropped%29.jpg
Nikocado Avocado
Bella Poarch|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Bella_Poarch_-_Pink_Aura_Tour.jpg/500px-Bella_Poarch_-_Pink_Aura_Tour.jpg
Zach King|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Zach_King_Photo.jpg/500px-Zach_King_Photo.jpg
Trisha Paytas|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Trisha_Paytas_at_the_2025_WorldPride_Music_Festival.jpg/500px-Trisha_Paytas_at_the_2025_WorldPride_Music_Festival.jpg
Hasan Piker|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/HasanStLouis-20260501-234558761_%28cropped%29.jpg/500px-HasanStLouis-20260501-234558761_%28cropped%29.jpg
Valkyrae|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Valkyrae_in_2023_%28cropped%29.png/500px-Valkyrae_in_2023_%28cropped%29.png
SSSniperWolf|https://upload.wikimedia.org/wikipedia/en/1/19/Alia_Shelesh_YouTube_shorts_screenshot.jpg
Technoblade|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Technoblade_sig.svg/500px-Technoblade_sig.svg.png
TommyInnit|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/HMX_3271_%2853332035431%29_%28cropped%29.jpg/500px-HMX_3271_%2853332035431%29_%28cropped%29.jpg
Ludwig|https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ludwig_Ahgren_in_March_2023_%283x4_cropped%29.jpg/500px-Ludwig_Ahgren_in_March_2023_%283x4_cropped%29.jpg
Dixie D'Amelio|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Dixie_D%27Amelio_2.jpg/500px-Dixie_D%27Amelio_2.jpg
Bretman Rock|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Bretman_Rock_2019.jpg/500px-Bretman_Rock_2019.jpg
Jenna Marbles|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/RISE_-_Jenna_Marbles_01_%28cropped%29.jpg/500px-RISE_-_Jenna_Marbles_01_%28cropped%29.jpg
Danny Gonzalez|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Danny_Gonzalez_-_I_Exposed_the_World%27s_Most_EVIL_Babysitter%21_%28cropped%29.jpg/500px-Danny_Gonzalez_-_I_Exposed_the_World%27s_Most_EVIL_Babysitter%21_%28cropped%29.jpg
Drew Gooden|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Drew_Gooden_-_We_Are_Two_Different_People_Tour_%282019%29.jpg/330px-Drew_Gooden_-_We_Are_Two_Different_People_Tour_%282019%29.jpg
Gordon Ramsay|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Gordon_Ramsay_%28cropped%29.jpg/500px-Gordon_Ramsay_%28cropped%29.jpg
Joe Rogan|https://upload.wikimedia.org/wikipedia/commons/2/2c/Joe_Rogan_2026_%28cropped%29.jpg
`),

cat('sports', 'Sports', '🏆', `
Lionel Messi|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/500px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg
Cristiano Ronaldo|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg/500px-Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-075_%28cropped%29.jpg
Neymar Jr|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Neymar_Junior_Brazil_V_Morocco_13_June_2026-40.jpg/500px-Neymar_Junior_Brazil_V_Morocco_13_June_2026-40.jpg
Kylian Mbappé|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/500px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg
Erling Haaland|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/500px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg
Vinícius Júnior|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg/500px-Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg
LeBron James|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/500px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg
Stephen Curry|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Stephen_Curry%2C_Olympic_Games_2024_%28cropped%29.jpg/500px-Stephen_Curry%2C_Olympic_Games_2024_%28cropped%29.jpg
Kobe Bryant|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Kobe_Bryant_Dec_2014.jpg/500px-Kobe_Bryant_Dec_2014.jpg
Michael Jordan|https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg
Shaquille O'Neal|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/TechCrunch_Disrupt_2023_-_Day_1_%28cropped%29.jpg/500px-TechCrunch_Disrupt_2023_-_Day_1_%28cropped%29.jpg
Giannis Antetokounmpo|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg/500px-Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg
Luka Dončić|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Luka_Don%C4%8Di%C4%87_and_Marines%2C_2026_%28cropped%29.jpg/500px-Luka_Don%C4%8Di%C4%87_and_Marines%2C_2026_%28cropped%29.jpg
Victor Wembanyama|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Victor_Wembanyama_San_Antonio_Spurs_2024.jpg/500px-Victor_Wembanyama_San_Antonio_Spurs_2024.jpg
Serena Williams|https://upload.wikimedia.org/wikipedia/commons/2/2f/Guests_at_the_2026_Met_Gala_209_%28cropped%29.jpg
Simone Biles|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Simone_Biles_National_Team_2024.jpg/500px-Simone_Biles_National_Team_2024.jpg
Usain Bolt|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Usain_Bolt_smiling_Berlin_2009.JPG/500px-Usain_Bolt_smiling_Berlin_2009.JPG
Tom Brady|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Tom_Brady_-_240422_191334_%28cropped%29_%28cropped%29.jpg/500px-25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Tom_Brady_-_240422_191334_%28cropped%29_%28cropped%29.jpg
Patrick Mahomes|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Patrick_Mahomes_%2851615475056%29.jpg/500px-Patrick_Mahomes_%2851615475056%29.jpg
Travis Kelce|https://upload.wikimedia.org/wikipedia/commons/f/f5/Travis_Kelce_in_the_Oval_Office_of_the_White_House_on_June_5%2C_2023_-_P20230605AS-0902_%28cropped%29.jpg
Conor McGregor|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Conor_McGregor_2025.jpeg/500px-Conor_McGregor_2025.jpeg
Khabib Nurmagomedov|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Khabib_nurmagomedov.jpg/500px-Khabib_nurmagomedov.jpg
Jon Jones|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Jon_Jones_-_Supporting_Brain_Health_Study.jpg/500px-Jon_Jones_-_Supporting_Brain_Health_Study.jpg
Mike Tyson|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Mike_Tyson_Photo_Op_GalaxyCon_Austin_2023.jpg/500px-Mike_Tyson_Photo_Op_GalaxyCon_Austin_2023.jpg
Muhammad Ali|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/500px-Muhammad_Ali_NYWTS.jpg
Floyd Mayweather|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Floyd_Mayweather_Jr_2011.jpg/500px-Floyd_Mayweather_Jr_2011.jpg
Lewis Hamilton|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg/500px-Prime_Minister_Keir_Starmer_meets_Sir_Lewis_Hamilton_%2854566928382%29_%28cropped%29.jpg
Max Verstappen|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg/500px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3973_by_Stepro_%28medium_crop%29.jpg
Tiger Woods|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/President_Donald_Trump_hosts_a_reception_honoring_Black_History_Month_%2854341713089%29_%28cropped%29.jpg/500px-President_Donald_Trump_hosts_a_reception_honoring_Black_History_Month_%2854341713089%29_%28cropped%29.jpg
Shohei Ohtani|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Dodgers_at_Nationals_%2853677192000%29_%28cropped%29.jpg/500px-Dodgers_at_Nationals_%2853677192000%29_%28cropped%29.jpg
Caitlin Clark|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Caitlin_Clark_Fever_2026_%28cropped%29.jpg/500px-Caitlin_Clark_Fever_2026_%28cropped%29.jpg
Ronaldinho|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Ronaldinho_in_2019.jpg/500px-Ronaldinho_in_2019.jpg
Zlatan Ibrahimović|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Zlatan_Ibrahimovi%C4%87_nyc.jpg/500px-Zlatan_Ibrahimovi%C4%87_nyc.jpg
David Beckham|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/David_Beckham_UNICEF_%28cropped2%29.jpg/500px-David_Beckham_UNICEF_%28cropped2%29.jpg
Naomi Osaka|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Naomi_Osaka_%282025_DC_Open%29_01_%28cropped%29.jpg/500px-Naomi_Osaka_%282025_DC_Open%29_01_%28cropped%29.jpg
Kevin Durant|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Kevin_Durant%2C_Paris_2024_%28cropped%29.jpg/500px-Kevin_Durant%2C_Paris_2024_%28cropped%29.jpg
Pelé|https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg
Diego Maradona|https://upload.wikimedia.org/wikipedia/commons/4/48/Argentina_celebrando_copa_%28cropped%29.jpg
Sha'Carri Richardson|https://upload.wikimedia.org/wikipedia/commons/2/2d/Sha%27Carri_Richardson_Budapest_2023_%28cropped%29.jpg
`),

cat('spicy', 'Controversial', '🔥', `
Andrew Tate|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Andrew_Tate_-_James_Tamim_Upload_%28Cropped_Wide_Portrait%29.png/500px-Andrew_Tate_-_James_Tamim_Upload_%28Cropped_Wide_Portrait%29.png
Elon Musk|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/500px-Elon_Musk_-_54820081119_%28cropped%29.jpg
Donald Trump|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/500px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg
Kanye West|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg/500px-Kanye_West_at_the_2009_Tribeca_Film_Festival_%28crop_2%29.jpg
Diddy|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Sean_Combs_Cannes_2012_%283x4_cropped_2%29.jpg/500px-Sean_Combs_Cannes_2012_%283x4_cropped_2%29.jpg
Jeffrey Epstein|https://upload.wikimedia.org/wikipedia/commons/5/59/Jeffrey_Epstein_mug_shot_%28cropped%29.jpg
Elizabeth Holmes|https://upload.wikimedia.org/wikipedia/commons/d/da/Elizabeth_Holmes_2014_cropped.jpg
Sam Bankman-Fried|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Sam_Bankman-Fried_%28cropped%29.png/500px-Sam_Bankman-Fried_%28cropped%29.png
Martin Shkreli|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Mr._Shkreli_%28cropped%29.jpg/500px-Mr._Shkreli_%28cropped%29.jpg
Logan Paul|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Logan_Paul_RR25_%28cropped%29.jpg/500px-Logan_Paul_RR25_%28cropped%29.jpg
Kim Jong-un|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Kim_Jong-un_and_Vladimir_Putin_%282023-09-13%29_12_%28cropped_2%29.jpg/500px-Kim_Jong-un_and_Vladimir_Putin_%282023-09-13%29_12_%28cropped_2%29.jpg
Vladimir Putin|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg/500px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29_2.jpg
Mark Zuckerberg|https://upload.wikimedia.org/wikipedia/commons/0/0e/F20250904AH-2824_%2854778373111%29_%283x4_cropped_on_Zuckerberg_following_the_rule_of_thirds%29.jpg
Jeff Bezos|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg/500px-260202-D-PM193-2205_SECWAR_Arsenal_of_Freedom_Tour_-_Florida_%283x4_cropped_on_Bezos_and_rotated%29.jpg
Kim Kardashian|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Kim_Kardashian_West_2014.jpg/500px-Kim_Kardashian_West_2014.jpg
Amber Heard|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Amber_Heard_by_Gage_Skidmore.jpg/500px-Amber_Heard_by_Gage_Skidmore.jpg
Johnny Depp|https://upload.wikimedia.org/wikipedia/commons/2/21/Johnny_Depp_2020.jpg
Will Smith|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg/500px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg
Chris Brown|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/A1_Chris_Brown_2025.jpg/500px-A1_Chris_Brown_2025.jpg
R. Kelly|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/R._Kelly_in_2017.png/500px-R._Kelly_in_2017.png
Harvey Weinstein|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Harvey_Weinstein_2011_Shankbone.JPG/500px-Harvey_Weinstein_2011_Shankbone.JPG
O.J. Simpson|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/O.J._Simpson_1990_%C2%B7_DN-ST-91-03444_crop.JPEG/500px-O.J._Simpson_1990_%C2%B7_DN-ST-91-03444_crop.JPEG
Lance Armstrong|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Lance_Armstrong_%28Tour_Down_Under_2009%29.jpg/500px-Lance_Armstrong_%28Tour_Down_Under_2009%29.jpg
Bernie Madoff|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Bernard_Madoff_2009_mug_shot_%283x4_cropped%29.jpg/500px-Bernard_Madoff_2009_mug_shot_%283x4_cropped%29.jpg
Julian Assange|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Julian_Assange_at_2025_Cannes_The_Six_Billion_Dollar_Man_Photocall_3_%28cropped%29.jpg/500px-Julian_Assange_at_2025_Cannes_The_Six_Billion_Dollar_Man_Photocall_3_%28cropped%29.jpg
Edward Snowden|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Edward_Snowden_2013-10-9_%281%29_%28cropped%29.jpg/500px-Edward_Snowden_2013-10-9_%281%29_%28cropped%29.jpg
Anna Delvey|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/AnnaDelvey-byPhilipRomano.jpg/500px-AnnaDelvey-byPhilipRomano.jpg
Tekashi 6ix9ine|https://upload.wikimedia.org/wikipedia/commons/4/4c/6ix9ine_June_2018_side_%28cropped_x2%29.jpg
Alex Jones|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Alex_Jones_%2853808242292%29_%28cropped%29_%282%29.jpg/500px-Alex_Jones_%2853808242292%29_%28cropped%29_%282%29.jpg
Bill Cosby|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/The_World_Affairs_Council_and_Girard_College_present_Bill_Cosby_%286343666943%29_%28cropped_to_Cosby%29.jpg/500px-The_World_Affairs_Council_and_Girard_College_present_Bill_Cosby_%286343666943%29_%28cropped_to_Cosby%29.jpg
Adolf Hitler|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Hitler_portrait_crop_%28cropped%29%282%29.jpg/500px-Hitler_portrait_crop_%28cropped%29%282%29.jpg
Joseph Stalin|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/StalinCropped1943.jpg/500px-StalinCropped1943.jpg
Genghis Khan|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/YuanEmperorAlbumGenghisPortrait.jpg/500px-YuanEmperorAlbumGenghisPortrait.jpg
Piers Morgan|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/The_Prime_Minister_is_interviewed_by_Piers_Morgan_%28cropped3%29.jpg/500px-The_Prime_Minister_is_interviewed_by_Piers_Morgan_%28cropped3%29.jpg
Ghislaine Maxwell|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Ghislaine_Maxwell_MDC_mug_shot.webp/500px-Ghislaine_Maxwell_MDC_mug_shot.webp
Pablo Escobar|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Pablo_Escobar_Mug_%28cropped%29%28b%29.jpg/500px-Pablo_Escobar_Mug_%28cropped%29%28b%29.jpg
Marilyn Manson|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Marilyn_Manson_2024.jpg/500px-Marilyn_Manson_2024.jpg
Jared Leto|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Jared_Leto_by_Gage_Skidmore_2.jpg/500px-Jared_Leto_by_Gage_Skidmore_2.jpg
Ellen DeGeneres|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Ellen_DeGeneres_2011.jpg/500px-Ellen_DeGeneres_2011.jpg
Benito Mussolini|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Mussolini_mezzobusto.jpg/500px-Mussolini_mezzobusto.jpg
Mao Zedong|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Mao_Zedong_1950_Portrait_%283x4_cropped%29%282%29.jpg/500px-Mao_Zedong_1950_Portrait_%283x4_cropped%29%282%29.jpg
Pol Pot|https://upload.wikimedia.org/wikipedia/commons/f/fe/Pol_Pot_in_1978.png
Idi Amin|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Idi_Amin_at_UN_%28United_Nations%2C_New_York%29_gtfy.00132_%28cropped%29.jpg/500px-Idi_Amin_at_UN_%28United_Nations%2C_New_York%29_gtfy.00132_%28cropped%29.jpg
Saddam Hussein|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Saddam_Hussein_in_1998.jpg/500px-Saddam_Hussein_in_1998.jpg
Osama bin Laden|https://upload.wikimedia.org/wikipedia/commons/c/ca/Osama_bin_Laden_portrait.jpg
Muammar Gaddafi|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Moamer_el_Gadafi_%28cropped%29.jpg/500px-Moamer_el_Gadafi_%28cropped%29.jpg
Kim Jong-il|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Kim_Jong-il_on_August_24%2C_2011.jpg/500px-Kim_Jong-il_on_August_24%2C_2011.jpg
Xi Jinping|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg/500px-Prime_Minister_Keir_Starmer_visits_China_%2855066713683%29_%28cropped%2Bangle%29.jpg
Ali Khamenei|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Ali_Khamenei_Nowruz_message_official_portrait_1397_02_%283_x_4_cropped%29.jpg/500px-Ali_Khamenei_Nowruz_message_official_portrait_1397_02_%283_x_4_cropped%29.jpg
Bashar al-Assad|https://upload.wikimedia.org/wikipedia/commons/d/df/Bashar_al-Assad_in_May_2024.png
Benjamin Netanyahu|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/500px-Benjamin_Netanyahu%2C_February_2023.jpg
Recep Tayyip Erdoğan|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg/500px-Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg
Jair Bolsonaro|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%283x4%29.jpg/500px-Jair_Bolsonaro_em_24_de_abril_de_2019_%281%29_%283x4%29.jpg
Javier Milei|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg/500px-Javier_Milei_in_pull-aside_meeting_at_the_United_Nations_Headquarters_%283x4_cropped%29.jpg
Boris Johnson|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/500px-Boris_Johnson_official_portrait_%28cropped%29.jpg
Nigel Farage|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Official_portrait_of_Nigel_Farage_MP_%283x4_cropped%29.jpg/500px-Official_portrait_of_Nigel_Farage_MP_%283x4_cropped%29.jpg
Prince Andrew|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/The_Duke_of_York_in_Belfast_%28cropped_3%29.jpg/500px-The_Duke_of_York_in_Belfast_%28cropped_3%29.jpg
Prince Harry|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Prince_Harry_launching_the_2020_Invictus_Games_%28cropped%29.jpg/500px-Prince_Harry_launching_the_2020_Invictus_Games_%28cropped%29.jpg
Meghan Markle|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/SXSW-2024-OB7A9986-alih-Meghan%2C_Duchess_of_Sussex_%28cropped%29.jpg/500px-SXSW-2024-OB7A9986-alih-Meghan%2C_Duchess_of_Sussex_%28cropped%29.jpg
Bill Clinton|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/500px-Bill_Clinton.jpg
Rudy Giuliani|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Rudy_Giuliani_%2849279859833%29_%28cropped%29.jpg/500px-Rudy_Giuliani_%2849279859833%29_%28cropped%29.jpg
Steve Bannon|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Steve_Bannon_in_2025_%283x4_cropped%29.jpg/500px-Steve_Bannon_in_2025_%283x4_cropped%29.jpg
Tucker Carlson|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Tucker_Carlson_%2854670577849%29_%28cropped_2%29.jpg/500px-Tucker_Carlson_%2854670577849%29_%28cropped_2%29.jpg
Candace Owens|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Candace_Owens_%2853805331465%29_%28cropped%29.jpg/500px-Candace_Owens_%2853805331465%29_%28cropped%29.jpg
Ben Shapiro|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Ben_Shapiro_December_2025_%28cropped%29.jpg/500px-Ben_Shapiro_December_2025_%28cropped%29.jpg
Jordan Peterson|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Jordan_Peterson_in_2018_%283x4_cropped%29.jpg/500px-Jordan_Peterson_in_2018_%283x4_cropped%29.jpg
Charlie Kirk|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Charlie_Kirk_%2853952923573%29_%28headshot_cropped%29.jpg/500px-Charlie_Kirk_%2853952923573%29_%28headshot_cropped%29.jpg
Greta Thunberg|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Greta_Thunberg_in_May_2026_%28cropped_3x4%29.jpg/500px-Greta_Thunberg_in_May_2026_%28cropped_3x4%29.jpg
Charles Manson|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Manson1968.jpg/500px-Manson1968.jpg
Ted Bundy|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/500px-Ted_Bundy_headshot.jpg
Jeffrey Dahmer|https://upload.wikimedia.org/wikipedia/en/0/0c/Jeffrey_Dahmer_Milwaukee_Police_1991_mugshot.jpg
Jack the Ripper|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/JacktheRipper1888.jpg/500px-JacktheRipper1888.jpg
Al Capone|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Al_Capone_in_1930_%28manually_dusted%29.jpg/500px-Al_Capone_in_1930_%28manually_dusted%29.jpg
El Chapo|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg/500px-Booking_photo_of_Joaquin_%E2%80%9CEl_Chapo%E2%80%9C_Guzman_%28front%29.jpg
Luigi Mangione
Gypsy Rose Blanchard
Joe Exotic|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/500px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png
Carole Baskin|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Carole_Baskin_September_2019.png/500px-Carole_Baskin_September_2019.png
Billy McFarland|https://upload.wikimedia.org/wikipedia/commons/6/6f/Billy_McFarland_Entrepreneur_2014_%28cropped%29.jpg
Adam Neumann|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Mr._Adam_Neumann%2C_Founder_WeWork_%28Start_Up_India_Participant%29_call_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_January_15%2C_2016_-_cropped.jpg/500px-Mr._Adam_Neumann%2C_Founder_WeWork_%28Start_Up_India_Participant%29_call_on_the_Prime_Minister%2C_Shri_Narendra_Modi%2C_in_New_Delhi_on_January_15%2C_2016_-_cropped.jpg
Do Kwon|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Do_Kwon.png/500px-Do_Kwon.png
Shia LaBeouf|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Shia_LaBeouf_2022.jpg/500px-Shia_LaBeouf_2022.jpg
Ezra Miller|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Ezra_Miller_by_Gage_Skidmore_2.jpg/500px-Ezra_Miller_by_Gage_Skidmore_2.jpg
Azealia Banks|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/AzealiaBanksBrixt140924_%2874_of_77%29_%2853997797453%29_%28cropped%29.jpg/500px-AzealiaBanksBrixt140924_%2874_of_77%29_%2853997797453%29_%28cropped%29.jpg
Tory Lanez|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Tory_Lanez_NYC_2018_%28cropped%29.jpg/500px-Tory_Lanez_NYC_2018_%28cropped%29.jpg
DaBaby|https://upload.wikimedia.org/wikipedia/commons/9/9d/DaBaby_2026.jpg
Young Thug|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Young_Thug_in_2021.png/500px-Young_Thug_in_2021.png
Soulja Boy|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Soulja.jpg/500px-Soulja.jpg
Bhad Bhabie|https://upload.wikimedia.org/wikipedia/commons/2/2d/Bhad_Bhabie_passport.jpg
Belle Delphine|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Belle_Delphine_-_2020-b_%28cropped%29.png/500px-Belle_Delphine_-_2020-b_%28cropped%29.png
Shane Dawson|https://upload.wikimedia.org/wikipedia/commons/7/7a/Shane_Dawson_with_fan_%28cropped%29.png
Tana Mongeau|https://upload.wikimedia.org/wikipedia/commons/4/4c/Tana_Mongeau_in_Six_Feet_Above_podcast_02-24_-_2.png
Colin Kaepernick|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Colin_Kaepernick_August_2025_%28cropped%29.jpg/500px-Colin_Kaepernick_August_2025_%28cropped%29.jpg
Kyrie Irving|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Kyrie_Irving_%2851830909437%29_%28cropped%29.jpg/500px-Kyrie_Irving_%2851830909437%29_%28cropped%29.jpg
Rachel Dolezal|https://upload.wikimedia.org/wikipedia/commons/f/f2/Rachel_Dolezal_at_Spokane_Rally_cropped_2.jpg
Caitlyn Jenner|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Web_Summit_2017_-_Future_Societies_SM0_1242_%2838228173296%29_%28cropped%29.jpg/500px-Web_Summit_2017_-_Future_Societies_SM0_1242_%2838228173296%29_%28cropped%29.jpg
Lizzo|https://upload.wikimedia.org/wikipedia/commons/1/16/Lizzo_September_2025.png
Mel Gibson|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Mel_Gibson_Cannes_2016_2.jpg/500px-Mel_Gibson_Cannes_2016_2.jpg
Woody Allen|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Woody_Allen_Cannes_2016.jpg/500px-Woody_Allen_Cannes_2016.jpg
Roman Polanski|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/2023.11.13._Roman_Polanski_Photo_Mariusz_Kubik_06.JPG/500px-2023.11.13._Roman_Polanski_Photo_Mariusz_Kubik_06.JPG
Kevin Spacey|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Kevin_Spacey-9243.jpg/500px-Kevin_Spacey-9243.jpg
`),

cat('icons', 'Icons & Legends', '👑', `
Michael Jackson|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg/500px-Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg
Elvis Presley|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/500px-Elvis_Presley_promoting_Jailhouse_Rock.jpg
Marilyn Monroe|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Monroecirca1953.jpg/500px-Monroecirca1953.jpg
Albert Einstein|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg
Isaac Newton|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/500px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg
Leonardo da Vinci|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/500px-Francesco_Melzi_-_Portrait_of_Leonardo.png
Cleopatra|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/500px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg
Julius Caesar|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg/500px-Retrato_de_Julio_C%C3%A9sar_%2826724093101%29_%28cropped%29.jpg
Napoleon Bonaparte|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/500px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg
Abraham Lincoln|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/500px-Abraham_Lincoln_O-77_matte_collodion_print.jpg
Martin Luther King Jr.|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg/500px-Martin_Luther_King%2C_Jr._and_Lyndon_Johnson_%28cropped%29.jpg
Rosa Parks|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Rosa_Parks%2C_November_1956_%28cropped%29.jpg/500px-Rosa_Parks%2C_November_1956_%28cropped%29.jpg
Nelson Mandela|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/500px-Nelson_Mandela_1994.jpg
Mahatma Gandhi|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg/500px-Mahatma-Gandhi%2C_studio%2C_1931.jpg
Mother Teresa|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/500px-Mother_Teresa_1.jpg
Princess Diana|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg/500px-Diana%2C_Princess_of_Wales_1997_%282%29.jpg
Queen Elizabeth II|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg/500px-Queen_Elizabeth_II_official_portrait_for_1959_tour_%28retouched%29_%28cropped%29_%283-to-4_aspect_ratio%29.jpg
Steve Jobs|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Steve_Jobs_Headshot_2010_%28cropped_4%29.jpg/500px-Steve_Jobs_Headshot_2010_%28cropped_4%29.jpg
Bill Gates|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg/500px-Bill_Gates_at_the_European_Commission_-_P067383-987995_%28cropped%29_5.jpg
Walt Disney|https://upload.wikimedia.org/wikipedia/commons/5/50/Walt_Disney_1946_%28cropped2%29.JPG
Stephen Hawking|https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg
Nikola Tesla|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Tesla_circa_1890.jpeg/500px-Tesla_circa_1890.jpeg
Frida Kahlo|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/500px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg
Pablo Picasso|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/500px-Pablo_picasso_1.jpg
Vincent van Gogh|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg
William Shakespeare|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/William_Shakespeare_by_John_Taylor%2C_edited.jpg/500px-William_Shakespeare_by_John_Taylor%2C_edited.jpg
Beethoven|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg/500px-Joseph_Karl_Stieler%27s_Beethoven_mit_dem_Manuskript_der_Missa_solemnis.jpg
Mozart|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/The_Mozart_Family_-_Wolfgang_Amadeus_Mozart_headshot.jpg/500px-The_Mozart_Family_-_Wolfgang_Amadeus_Mozart_headshot.jpg
Bob Marley|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Bob_Marley_circa_1976_%28cropped%29.jpg/500px-Bob_Marley_circa_1976_%28cropped%29.jpg
Tupac Shakur|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/2pac_edit_cropped_further.jpg/500px-2pac_edit_cropped_further.jpg
The Notorious B.I.G.|https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Biggie_Smalls_1997.jpg/250px-Biggie_Smalls_1997.jpg
Bruce Lee|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Bruce_Lee_as_Chen_Zhen_%284x5_cropped%29.jpg/500px-Bruce_Lee_as_Chen_Zhen_%284x5_cropped%29.jpg
Jackie Chan|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Jackie_Chan.jpg/500px-Jackie_Chan.jpg
Oprah Winfrey|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Oprah_Winfrey_2016.jpg/500px-Oprah_Winfrey_2016.jpg
Anne Frank|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Anne_Frank_passport_photo%2C_May_1942_%28cropped%29.jpg/500px-Anne_Frank_passport_photo%2C_May_1942_%28cropped%29.jpg
Amelia Earhart|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra%2C_small_%28cropped%29.jpg/500px-Amelia_Earhart_standing_under_nose_of_her_Lockheed_Model_10-E_Electra%2C_small_%28cropped%29.jpg
Neil Armstrong|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/500px-Neil_Armstrong_pose.jpg
Malala Yousafzai|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Malala_Yousafzai_2023_portrait_2x3.jpg/500px-Malala_Yousafzai_2023_portrait_2x3.jpg
Che Guevara|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg/500px-Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg
Freddie Mercury|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg/500px-Freddie_Mercury_performing_in_New_Haven%2C_CT%2C_November_1977.jpg
Whitney Houston|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Whitney_Houston_%28cropped3%29.JPEG/500px-Whitney_Houston_%28cropped3%29.JPEG
Charlie Chaplin|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Charlie_Chaplin_portrait_Getty_1739411952.jpg/500px-Charlie_Chaplin_portrait_Getty_1739411952.jpg
`),

cat('toons', 'Cartoons', '🧽', `
SpongeBob SquarePants|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/SpongeBob_SquarePants_Logo_%282008%29.svg/500px-SpongeBob_SquarePants_Logo_%282008%29.svg.png
Patrick Star|https://upload.wikimedia.org/wikipedia/commons/2/28/Patrick_Star_character.png
Squidward|https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Squidward_Tentacles.svg/120px-Squidward_Tentacles.svg.png
Mickey Mouse|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Mickey_Mouse_%28poster_version%29.svg/500px-Mickey_Mouse_%28poster_version%29.svg.png
Bugs Bunny|https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/250px-Bugs_Bunny.svg.png
Homer Simpson|https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png
Bart Simpson|https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png
Rick Sanchez|https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png
Morty Smith|https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Morty_Smith.png/120px-Morty_Smith.png
Eric Cartman|https://upload.wikimedia.org/wikipedia/en/thumb/7/77/EricCartman.png/250px-EricCartman.png
Peter Griffin|https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png
Stewie Griffin|https://upload.wikimedia.org/wikipedia/en/0/02/Stewie_Griffin.png
Scooby-Doo|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Scooby_doo_logo.png/500px-Scooby_doo_logo.png
Shaggy|https://upload.wikimedia.org/wikipedia/en/8/87/ShaggyRogers.png
Tom and Jerry|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Tom_and_Jerry_logo.svg/500px-Tom_and_Jerry_logo.svg.png
Elsa|https://upload.wikimedia.org/wikipedia/en/5/5e/Elsa_from_Disney%27s_Frozen.png
Moana|https://upload.wikimedia.org/wikipedia/en/5/56/Moana_%28character%29.png
Simba|https://upload.wikimedia.org/wikipedia/en/9/94/Simba_%28_Disney_character_-_adult%29.png
Woody|https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Woody_at_Toy_Story_Land%2C_Hong_Kong.jpg/500px-Woody_at_Toy_Story_Land%2C_Hong_Kong.jpg
Buzz Lightyear|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Buzz_Lightyear_sculpture_of_Toy_Story_Hotel_Shanghai_%28cropped%29.jpg/500px-Buzz_Lightyear_sculpture_of_Toy_Story_Hotel_Shanghai_%28cropped%29.jpg
Nemo|https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Finding_Nemo.jpg/250px-Finding_Nemo.jpg
Dory|https://thumb.wikimedia.org/wikipedia/en/thumb/a/ae/Dory_%28Finding_Nemo%29.png/250px-Dory_%28Finding_Nemo%29.png
Mike Wazowski|https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG
Sulley
Donkey from Shrek|https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png
Po from Kung Fu Panda|https://upload.wikimedia.org/wikipedia/en/3/3d/Po_from_DreamWorks_Animation%27s_Kung_Fu_Panda.png
Aang|https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Avatar_Aang.png/250px-Avatar_Aang.png
Zuko|https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/Prince_Zuko.jpg/330px-Prince_Zuko.jpg
Toph|https://upload.wikimedia.org/wikipedia/en/4/46/Toph_Beifong.png
Finn the Human|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Finn_the_Human_character.svg/500px-Finn_the_Human_character.svg.png
Gumball|https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Amazing_World_of_Gumball_logo.svg/250px-The_Amazing_World_of_Gumball_logo.svg.png
Phineas|https://upload.wikimedia.org/wikipedia/en/5/52/Phineas_Flynn.png
Perry the Platypus|https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png
Dora the Explorer|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Dora_the_Explorer_logo.svg/500px-Dora_the_Explorer_logo.svg.png
Bluey|https://thumb.wikimedia.org/wikipedia/en/thumb/4/48/Bluey_%282018_TV_series%29_title_card.jpg/330px-Bluey_%282018_TV_series%29_title_card.jpg
Peppa Pig|https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Peppa_Pig_logo.svg/330px-Peppa_Pig_logo.svg.png
Winnie the Pooh|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Pooh_Shepard1928.jpg/500px-Pooh_Shepard1928.jpg
The Pink Panther|https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Pink_Panther.png/250px-Pink_Panther.png
Popeye|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Popeye_transparent.png/500px-Popeye_transparent.png
Johnny Bravo|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Johnny_Bravo_series_logo.png/500px-Johnny_Bravo_series_logo.png
Dexter|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Dexter-logo.png/500px-Dexter-logo.png
Courage the Cowardly Dog|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Courage_The_Cowardly_Dog_logo.png/500px-Courage_The_Cowardly_Dog_logo.png
Timmy Turner|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Timmy_Turner.png/500px-Timmy_Turner.png
Danny Phantom|https://thumb.wikimedia.org/wikipedia/en/thumb/f/f5/DannyPhantomlogo.svg/330px-DannyPhantomlogo.svg.png
Jimmy Neutron|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Jimmy_Neutron.png/500px-Jimmy_Neutron.png
Kim Possible|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Kim_Possible_%28Disney_television_logo%29.svg/500px-Kim_Possible_%28Disney_television_logo%29.svg.png
Ben 10|https://upload.wikimedia.org/wikipedia/commons/6/6f/Ben_10_reboot_logo.png
Steven Universe|https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Steven_Universe_-_Title_Card.png/330px-Steven_Universe_-_Title_Card.png
The Minions|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Minion_sculpture_in_Brisbane%2C_2024.jpg/500px-Minion_sculpture_in_Brisbane%2C_2024.jpg
Olaf|https://upload.wikimedia.org/wikipedia/en/6/6d/Olaf_from_Disney%27s_Frozen.png
`),


cat('genz', 'Gen Z Classics', '🧃', `
Hannah Montana|https://upload.wikimedia.org/wikipedia/en/2/2b/Hannah_Montana_Logo.PNG
Carly from iCarly|https://thumb.wikimedia.org/wikipedia/en/thumb/6/6d/Icarly_logo.svg/500px-Icarly_logo.svg.png
Spencer Shay|https://upload.wikimedia.org/wikipedia/en/e/ef/ICarly_Season_4.jpg
Sam Puckett|https://upload.wikimedia.org/wikipedia/en/b/b4/Sam_and_Cat_logo2.png
Zack and Cody|https://upload.wikimedia.org/wikipedia/en/8/88/The_Suite_Life_of_Zack_%26_Cody_logo.png
London Tipton|https://upload.wikimedia.org/wikipedia/en/e/e2/London_Tipton.png
Drake and Josh|https://thumb.wikimedia.org/wikipedia/en/thumb/f/f8/Drake_%26_Josh_Nickelodeon_Logo.svg/500px-Drake_%26_Josh_Nickelodeon_Logo.svg.png
Cat Valentine
Lizzie McGuire|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Lizzie_McGuire_logo.svg/500px-Lizzie_McGuire_logo.svg.png
Raven Baxter|https://upload.wikimedia.org/wikipedia/commons/e/e2/Raven_Baxter_smiling.png
Alex Russo|https://upload.wikimedia.org/wikipedia/en/4/4c/Alex_Russo.jpg
Troy Bolton|https://upload.wikimedia.org/wikipedia/en/a/a3/HSMcharacters.jpg
Sharpay Evans|https://upload.wikimedia.org/wikipedia/en/a/a3/HSMcharacters.jpg
Ned from Ned's Declassified|https://upload.wikimedia.org/wikipedia/en/f/f1/Ned%27s_Declassified_School_Survival_Guide_%28logo%29.png
Big Time Rush|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Big_Time_Rush_Band.jpg/500px-Big_Time_Rush_Band.jpg
Austin and Ally|https://upload.wikimedia.org/wikipedia/en/c/c9/Austin_%26_ally_tv_series_logo.png
Jessie|https://upload.wikimedia.org/wikipedia/en/0/00/Jessie_logo.png
Good Luck Charlie|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Goodluck_charly_logo.svg/500px-Goodluck_charly_logo.svg.png
Shake It Up|https://upload.wikimedia.org/wikipedia/en/c/cf/Shake_it_up_logo.png
Barney the Dinosaur|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Barney_show_in_Qatar_%284340543390%29.jpg/500px-Barney_show_in_Qatar_%284340543390%29.jpg
Elmo|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Elmo.jpg/500px-Elmo.jpg
Cookie Monster|https://upload.wikimedia.org/wikipedia/en/5/5e/Cisforcookie.jpg
Big Bird|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/LBJ_Foundation_DIG14086-065_%2834650875464%29.jpg/500px-LBJ_Foundation_DIG14086-065_%2834650875464%29.jpg
Oscar the Grouch|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/LBJ_Foundation_DIG14086-069_%2834650875314%29.jpg/500px-LBJ_Foundation_DIG14086-069_%2834650875314%29.jpg
Tinky Winky|https://thumb.wikimedia.org/wikipedia/en/thumb/5/5a/Teletubbies_Logo.png/500px-Teletubbies_Logo.png
Blue from Blue's Clues|https://thumb.wikimedia.org/wikipedia/en/thumb/2/20/Blues_Clues_logo.svg/500px-Blues_Clues_logo.svg.png
Bob the Builder|https://thumb.wikimedia.org/wikipedia/en/thumb/c/c6/Bob_the_Builder_logo.svg/500px-Bob_the_Builder_logo.svg.png
Thomas the Tank Engine|https://upload.wikimedia.org/wikipedia/en/e/eb/Thomas_the_Tank_Engine_1946.webp
Caillou|https://upload.wikimedia.org/wikipedia/en/8/86/Caillou_new_logo.png
Arthur the Aardvark|https://upload.wikimedia.org/wikipedia/commons/f/f0/ArthurCharacter.jpg
Clifford the Big Red Dog|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/CliffordTheBigRedDog1stEdition1963.png/500px-CliffordTheBigRedDog1stEdition1963.png
Curious George|https://upload.wikimedia.org/wikipedia/en/d/d8/Curious_George.png
Garfield|https://upload.wikimedia.org/wikipedia/en/4/46/Garfieldand_friends.png
Hello Kitty|https://upload.wikimedia.org/wikipedia/en/0/05/Hello_kitty_character_portrait.png
Tommy Pickles|https://upload.wikimedia.org/wikipedia/en/e/e4/Tommy_Pickles.png
Angelica Pickles|https://upload.wikimedia.org/wikipedia/en/6/6f/Angelica_Pickles.jpg
Arnold from Hey Arnold
CatDog|https://upload.wikimedia.org/wikipedia/en/6/64/CatDog.jpeg
Invader Zim|https://upload.wikimedia.org/wikipedia/en/2/20/Invader_Zim_title_card.png
Jake the Dog|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Jake_the_Dog_character.svg/500px-Jake_the_Dog_character.svg.png
Marceline the Vampire Queen|https://upload.wikimedia.org/wikipedia/en/4/48/Adventure_Time_-_Marceline.png
Ice King|https://upload.wikimedia.org/wikipedia/en/7/78/Ice_King.png
Mordecai and Rigby
Raven from Teen Titans|https://upload.wikimedia.org/wikipedia/en/6/6c/Raven_%28DC_Comics%29_Modern_001.png
Beast Boy|https://upload.wikimedia.org/wikipedia/en/0/09/Beast_Boy_%28DC_Rebirth_version%29.jpg
Blossom, Bubbles & Buttercup
Mojo Jojo
Ed, Edd n Eddy
Grim from Billy & Mandy|https://upload.wikimedia.org/wikipedia/en/e/e0/BillyAndMandy.png
Bloo|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Foster%27s_Home_for_Imaginary_Friends_logo.svg/500px-Foster%27s_Home_for_Imaginary_Friends_logo.svg.png
Cosmo and Wanda|https://thumb.wikimedia.org/wikipedia/en/thumb/5/55/The_Fairly_OddParents_logo.svg/500px-The_Fairly_OddParents_logo.svg.png
Robbie Rotten|https://upload.wikimedia.org/wikipedia/en/e/e7/Robbie_Rotten_LazyTown.png
Kick Buttowski|https://upload.wikimedia.org/wikipedia/en/e/eb/Kick_Buttowski-_Suburban_Daredevil_logo.png
Chowder|https://upload.wikimedia.org/wikipedia/en/3/31/Chowder_logo.png
Leonardo the Ninja Turtle|https://upload.wikimedia.org/wikipedia/en/e/ed/Leonardo_%28Teenage_Mutant_Ninja_Turtles%29.jpg
The Red Power Ranger|https://upload.wikimedia.org/wikipedia/en/c/cc/Mighty_Morphin_Power_Rangers_logo.png
Sid the Sloth
Scrat|https://upload.wikimedia.org/wikipedia/en/e/ec/Scrat_Ice_Age.png
King Julien|https://upload.wikimedia.org/wikipedia/en/5/53/All_Hail_King_Julien_Logo.png
Marty the Zebra|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Madagascar_logo.png/500px-Madagascar_logo.png
Puss in Boots|https://upload.wikimedia.org/wikipedia/en/8/8a/Puss_in_Boots_from_Shrek.png
Lord Farquaad|https://upload.wikimedia.org/wikipedia/en/7/7b/Shrek_%282001_animated_feature_film%29.jpg
Princess Fiona|https://upload.wikimedia.org/wikipedia/en/b/b9/Princess_Fiona.png
Toothless|https://upload.wikimedia.org/wikipedia/en/7/77/How_to_Train_Your_Dragon_%282003_book_cover%29.jpg
Megamind|https://upload.wikimedia.org/wikipedia/en/8/89/Megamind2010Poster.jpg
The Grinch|https://upload.wikimedia.org/wikipedia/en/7/73/The_Grinch.png
The Cat in the Hat|https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png
Alvin and the Chipmunks|https://upload.wikimedia.org/wikipedia/en/4/42/Alvin_and_the_chipmunks1958.jpg
Sharkboy and Lavagirl|https://upload.wikimedia.org/wikipedia/en/1/14/Adventures_of_shark_boy_and_lava_girl_poster.jpg
Napoleon Dynamite|https://upload.wikimedia.org/wikipedia/en/8/87/Napoleon_dynamite_post.jpg
Jigglypuff|https://upload.wikimedia.org/wikipedia/en/2/22/Pok%C3%A9mon_Jigglypuff_art.png
Charizard|https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png
Eevee|https://upload.wikimedia.org/wikipedia/en/a/a9/Pok%C3%A9mon_Eevee_art.png
Mewtwo|https://upload.wikimedia.org/wikipedia/en/4/43/Pok%C3%A9mon_Mewtwo_art.png
Yoshi|https://upload.wikimedia.org/wikipedia/en/d/db/Yoshi_%28Nintendo_character%29.png
Waluigi|https://upload.wikimedia.org/wikipedia/en/c/c1/Waluigi_by_Shigehisa_Nakaue.png
Shadow the Hedgehog|https://upload.wikimedia.org/wikipedia/en/4/41/ShadowTheHedgehogSA2.png
Tails
Spyro|https://thumb.wikimedia.org/wikipedia/en/thumb/1/1f/Spyro_Logo_2026.png/500px-Spyro_Logo_2026.png
Freddy Fazbear|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Five_Nights_at_Freddy%27s.svg/500px-Five_Nights_at_Freddy%27s.svg.png
Slender Man|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Slenderman_redacted_bg.jpg/500px-Slenderman_redacted_bg.jpg
The Roblox Noob
Angry Birds Red|https://upload.wikimedia.org/wikipedia/en/f/f9/The_Angry_Birds_Movie_poster.png
Talking Tom|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Talking_Tom_%26_Friends_logo.svg/500px-Talking_Tom_%26_Friends_logo.svg.png
Jake from Subway Surfers|https://thumb.wikimedia.org/wikipedia/en/thumb/a/a3/Subway_Surfers_logo.svg/500px-Subway_Surfers_logo.svg.png
Tom Nook|https://upload.wikimedia.org/wikipedia/en/7/72/Tom_Nook.png
Isabelle from Animal Crossing|https://upload.wikimedia.org/wikipedia/en/2/26/Isabelle_AF.png
Fortnite Peely
Yugi Muto|https://upload.wikimedia.org/wikipedia/en/b/b3/YugiMotoyamiyugi.png
Agumon|https://thumb.wikimedia.org/wikipedia/en/thumb/b/bc/Digimon_Adventure_Group.tiff/lossless-page1-330px-Digimon_Adventure_Group.tiff.png
Hatsune Miku|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Hatsune_miku_logo_v3.svg/500px-Hatsune_miku_logo_v3.svg.png
Grimace|https://upload.wikimedia.org/wikipedia/commons/a/ae/Shaky.jpg
Duolingo Owl
Grumpy Cat|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Grumpy_Cat_%2814556024763%29_%28cropped%29.jpg/500px-Grumpy_Cat_%2814556024763%29_%28cropped%29.jpg
Doge|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Doge_meme_example.jpg/500px-Doge_meme_example.jpg
Nyan Cat|https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG
Harambe|https://upload.wikimedia.org/wikipedia/en/e/ee/Harambe_with_boy.jpg
Big Chungus|https://upload.wikimedia.org/wikipedia/en/9/99/Wabbit_Twouble_Title_Card.png
Pepe the Frog|https://upload.wikimedia.org/wikipedia/en/6/63/Feels_good_man.jpg
Trollface|https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png
Rick Astley|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Glasto2023_%28149_of_468%29_%2853009108914%29_%28cropped%29.jpg/500px-Glasto2023_%28149_of_468%29_%2853009108914%29_%28cropped%29.jpg
Psy
Salt Bae|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Salt_Bae.png/500px-Salt_Bae.png
Skibidi Toilet|https://thumb.wikimedia.org/wikipedia/en/thumb/6/60/Skibidi_Toilet_Logo.png/500px-Skibidi_Toilet_Logo.png
Shrek's Gingy
Bratz|https://upload.wikimedia.org/wikipedia/en/a/a5/Bratz_2020_logo.png
Furby|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Furby_brand_logo.svg/500px-Furby_brand_logo.svg.png
`),

cat('disney', 'Disney & Pixar', '🏰', `
Mickey Mouse|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Mickey_Mouse_%28poster_version%29.svg/500px-Mickey_Mouse_%28poster_version%29.svg.png
Minnie Mouse|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Minnie_Mouse.svg/500px-Minnie_Mouse.svg.png
Donald Duck|https://upload.wikimedia.org/wikipedia/en/a/a5/Donald_Duck_angry_transparent_background.png
Daisy Duck|https://upload.wikimedia.org/wikipedia/en/1/1e/Daisy_Duck_Duckipedia.png
Goofy|https://upload.wikimedia.org/wikipedia/en/5/50/Goofy_Duckipedia.png
Pluto|https://upload.wikimedia.org/wikipedia/commons/3/3c/Rover_in_The_Picnic_%28Mickey_Mouse_Cartoons%29.png
Chip 'n' Dale|https://upload.wikimedia.org/wikipedia/en/d/dd/Chip_%27n%27_Dale_Duckipedia.png
Snow White|https://upload.wikimedia.org/wikipedia/en/e/e1/Snow_white_disney.png
Cinderella|https://upload.wikimedia.org/wikipedia/en/7/75/Cinderella2024design.png
Aurora|https://upload.wikimedia.org/wikipedia/en/7/7f/Aurora_%28Sleeping_Beauty%29.png
Ariel|https://upload.wikimedia.org/wikipedia/en/7/77/Ariel_disney.png
Belle|https://upload.wikimedia.org/wikipedia/en/d/d5/Belle_disney.png
Jasmine|https://upload.wikimedia.org/wikipedia/en/0/00/Jasmine_%28Aladdin%29.png
Pocahontas|https://upload.wikimedia.org/wikipedia/en/5/57/Pocahontasposter.jpg
Mulan|https://upload.wikimedia.org/wikipedia/en/a/a3/Movie_poster_mulan.JPG
Tiana|https://upload.wikimedia.org/wikipedia/en/8/81/Tiana_Disney.png
Rapunzel|https://upload.wikimedia.org/wikipedia/en/6/6a/Rapunzel_tangled.png
Merida|https://upload.wikimedia.org/wikipedia/en/e/e8/Merida_disney.png
Elsa|https://upload.wikimedia.org/wikipedia/en/5/5e/Elsa_from_Disney%27s_Frozen.png
Anna|https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg
Olaf|https://upload.wikimedia.org/wikipedia/en/6/6d/Olaf_from_Disney%27s_Frozen.png
Kristoff
Moana|https://upload.wikimedia.org/wikipedia/en/5/56/Moana_%28character%29.png
Maui|https://upload.wikimedia.org/wikipedia/en/5/57/Maui_Disney.webp
Mirabel Madrigal|https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg
Bruno Madrigal|https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg
Raya|https://upload.wikimedia.org/wikipedia/en/e/ea/Raya_and_the_Last_Dragon.png
Stitch|https://thumb.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/500px-Stitch_%28Lilo_%26_Stitch%29.svg.png
Lilo|https://upload.wikimedia.org/wikipedia/en/d/d9/LiloStitchCharacters.jpg
Simba|https://upload.wikimedia.org/wikipedia/en/9/94/Simba_%28_Disney_character_-_adult%29.png
Mufasa|https://upload.wikimedia.org/wikipedia/en/a/a0/Mufasa_promotional_image.webp
Scar|https://upload.wikimedia.org/wikipedia/en/4/4d/Scar_lion_king.png
Timon and Pumbaa|https://upload.wikimedia.org/wikipedia/en/9/91/Pumbaa.png
Rafiki|https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg
Aladdin|https://upload.wikimedia.org/wikipedia/en/b/be/Aladdin_Disney_pose.png
Genie|https://upload.wikimedia.org/wikipedia/en/0/0c/The_Genie_Aladdin.png
Jafar|https://upload.wikimedia.org/wikipedia/en/b/bd/Aladdin_%281992_Disney_film%29_poster.jpg
Ursula|https://upload.wikimedia.org/wikipedia/en/e/e3/Ursula%28TheLittleMermaid%29character.png
Sebastian the Crab|https://thumb.wikimedia.org/wikipedia/en/thumb/9/92/Disney_Little_Mermaid_characters.jpg/500px-Disney_Little_Mermaid_characters.jpg
Maleficent|https://upload.wikimedia.org/wikipedia/en/7/7e/Malefica.jpg
Cruella de Vil|https://upload.wikimedia.org/wikipedia/en/6/64/Cruella_de_Vil.png
Captain Hook|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Captain_Hook.PNG/500px-Captain_Hook.PNG
Peter Pan|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Peter_Pan_%281953_poster%29.jpg/500px-Peter_Pan_%281953_poster%29.jpg
Tinker Bell|https://upload.wikimedia.org/wikipedia/commons/4/42/Tinkclose-1-.jpg
Pinocchio|https://upload.wikimedia.org/wikipedia/en/b/ba/Pinocchio-1940-poster.jpg
Dumbo|https://upload.wikimedia.org/wikipedia/en/a/a7/Dumbo-1941-poster.jpg
Bambi|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Bambi-Hans-Bertle.jpg/500px-Bambi-Hans-Bertle.jpg
Alice in Wonderland|https://upload.wikimedia.org/wikipedia/commons/6/63/Alice_par_John_Tenniel_04.png
The Cheshire Cat|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Tennel_Cheshire_proof.png/500px-Tennel_Cheshire_proof.png
The Mad Hatter|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/MadlHatterByTenniel.svg/500px-MadlHatterByTenniel.svg.png
Hercules|https://upload.wikimedia.org/wikipedia/en/7/76/Disney%27s_Hercules_characters.jpg
Hades|https://upload.wikimedia.org/wikipedia/en/7/76/Disney%27s_Hercules_characters.jpg
Tarzan|https://upload.wikimedia.org/wikipedia/en/4/4f/Tarzan_%281999_film%29_-_theatrical_poster.jpg
Quasimodo|https://upload.wikimedia.org/wikipedia/en/2/26/The_Hunchback_of_Notre_Dame_1996_poster.jpg
Gaston|https://upload.wikimedia.org/wikipedia/en/a/a7/Gaston%28BeautyandtheBeast%29.png
The Beast
Lumière|https://upload.wikimedia.org/wikipedia/en/b/b6/BeautyBeastCharacters.jpg
Kuzco|https://upload.wikimedia.org/wikipedia/en/6/69/Grooveposter.jpg
Yzma|https://upload.wikimedia.org/wikipedia/en/b/b3/TENGcharacters.jpg
Mushu|https://upload.wikimedia.org/wikipedia/en/1/10/Mushu.png
Baloo|https://upload.wikimedia.org/wikipedia/commons/9/9f/The_second_jungle_book_%281895%29_%28Baloo%29.jpg
Mowgli|https://upload.wikimedia.org/wikipedia/commons/5/5e/Mowgli-1895-illustration.png
Robin Hood|https://upload.wikimedia.org/wikipedia/en/9/91/Robinhood_1973_poster.png
Judy Hopps|https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg
Nick Wilde
Flash the Sloth|https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg
Wreck-It Ralph|https://thumb.wikimedia.org/wikipedia/en/thumb/6/6c/Wreck-It_Ralph_logo.svg/500px-Wreck-It_Ralph_logo.svg.png
Vanellope von Schweetz|https://thumb.wikimedia.org/wikipedia/en/thumb/6/6c/Wreck-It_Ralph_logo.svg/500px-Wreck-It_Ralph_logo.svg.png
Baymax|https://upload.wikimedia.org/wikipedia/en/2/21/Baymax_%28Marvel_Comics%29.jpg
Mother Gothel|https://upload.wikimedia.org/wikipedia/en/f/fc/Gothel.png
Flynn Rider|https://upload.wikimedia.org/wikipedia/en/4/48/Flynn_Rider_Eugene_Fitzherbert_Tangled.png
The Evil Queen|https://upload.wikimedia.org/wikipedia/en/1/19/QueenSnowWhite.png
Woody|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Woody_at_Toy_Story_Land%2C_Hong_Kong.jpg/500px-Woody_at_Toy_Story_Land%2C_Hong_Kong.jpg
Buzz Lightyear|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Buzz_Lightyear_sculpture_of_Toy_Story_Hotel_Shanghai_%28cropped%29.jpg/500px-Buzz_Lightyear_sculpture_of_Toy_Story_Hotel_Shanghai_%28cropped%29.jpg
Jessie the Cowgirl|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Jessie_at_Shanghai_Toy_Story_Land_%28cropped%29.jpg/500px-Jessie_at_Shanghai_Toy_Story_Land_%28cropped%29.jpg
Rex|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Toy_Story_logo_2010.png/500px-Toy_Story_logo_2010.png
Mr. Potato Head
Lotso|https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg
Lightning McQueen|https://upload.wikimedia.org/wikipedia/en/8/82/Lightning_McQueen.png
Mater|https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png
WALL-E|https://upload.wikimedia.org/wikipedia/en/6/68/WALL-E_%28character%29.png
Remy the Rat|https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg
Carl Fredricksen|https://upload.wikimedia.org/wikipedia/en/9/9f/Carl_from_Up_2009.png
Dug the Dog|https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg
Mr. Incredible|https://upload.wikimedia.org/wikipedia/en/2/22/Mr._Incredible.png
Elastigirl|https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_%282004_animated_feature_film%29.jpg
Edna Mode|https://upload.wikimedia.org/wikipedia/en/f/fc/Edna_Mode_promotional_image.png
Jack-Jack|https://upload.wikimedia.org/wikipedia/en/8/88/IncredibleFamily.jpg
Syndrome|https://upload.wikimedia.org/wikipedia/en/8/88/IncredibleFamily.jpg
Joy from Inside Out|https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg
Anxiety from Inside Out|https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg
Miguel from Coco|https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg
Luca|https://upload.wikimedia.org/wikipedia/en/3/33/Luca_%282021_film%29.png
Mei Lee|https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg
Nemo|https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg
Dory|https://upload.wikimedia.org/wikipedia/en/a/ae/Dory_%28Finding_Nemo%29.png
Mike Wazowski|https://upload.wikimedia.org/wikipedia/en/6/6a/Mike_Wazowski.png
Sulley|https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG
Boo|https://upload.wikimedia.org/wikipedia/en/6/63/Monsters_Inc.JPG
Winnie the Pooh|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Pooh_Shepard1928.jpg/500px-Pooh_Shepard1928.jpg
Tigger|https://upload.wikimedia.org/wikipedia/en/3/34/Pooh_meets_Tigger%2C_illustration_by_EH_Shepard.gif
Eeyore|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Winnie-the-Pooh_166-1.png/500px-Winnie-the-Pooh_166-1.png
Perry the Platypus|https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png
`),

cat('history', 'History', '📜', `
Alexander the Great|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg/500px-Alexander_Mosaic_detail_of_Alexander_the_Great_%283x4_cropped%29.jpg
Socrates|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Socrates_Louvre.jpg/500px-Socrates_Louvre.jpg
Plato|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Plato_Silanion_Musei_Capitolini_MC1377.png/500px-Plato_Silanion_Musei_Capitolini_MC1377.png
Aristotle|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/500px-Aristotle_Altemps_Inv8575.jpg
Confucius|https://upload.wikimedia.org/wikipedia/commons/7/7e/Confucius%2C_fresco_from_a_Western_Han_tomb_of_Dongping_County%2C_Shandong_province%2C_China_%28cropped%29.jpg
Sun Tzu|https://upload.wikimedia.org/wikipedia/commons/c/cf/%E5%90%B4%E5%8F%B8%E9%A9%AC%E5%AD%99%E6%AD%A6.jpg
Buddha|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg/500px-Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg
Tutankhamun|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/500px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg
Ramesses II|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Ramses_II_British_Museum.jpg/500px-Ramses_II_British_Museum.jpg
Nefertiti|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/500px-Nofretete_Neues_Museum.jpg
Hammurabi|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/F0182_Louvre_Code_Hammourabi_Bas-relief_Sb8_rwk.jpg/500px-F0182_Louvre_Code_Hammourabi_Bas-relief_Sb8_rwk.jpg
Cyrus the Great|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Cyrus_II_%28The_Great%29_%28cropped%29.jpg/500px-Cyrus_II_%28The_Great%29_%28cropped%29.jpg
Hannibal Barca|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Hannibal_Barca_bust_from_Capua_photo.jpg/500px-Hannibal_Barca_bust_from_Capua_photo.jpg
Spartacus|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/%CE%A3%CF%80%CE%AC%CF%81%CF%84%CE%B1%CE%BA%CE%BF%CF%82_Spartacus%2CEspartaco_marble_statue_in_Louvre_%22%CE%9C%CE%B1%CE%B9%CE%B4%CE%BF%CE%B9_clan_-Meadow%22_slave_macedon-greek.jpg/500px-%CE%A3%CF%80%CE%AC%CF%81%CF%84%CE%B1%CE%BA%CE%BF%CF%82_Spartacus%2CEspartaco_marble_statue_in_Louvre_%22%CE%9C%CE%B1%CE%B9%CE%B4%CE%BF%CE%B9_clan_-Meadow%22_slave_macedon-greek.jpg
Augustus|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Augustus_of_Prima_Porta.jpg/500px-Augustus_of_Prima_Porta.jpg
Nero|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Nero_Glyptothek_Munich_321.jpg/500px-Nero_Glyptothek_Munich_321.jpg
Caligula|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Caligula.Carlsberg_Glyptotek.%28cropped%29.jpg/500px-Caligula.Carlsberg_Glyptotek.%28cropped%29.jpg
Marcus Aurelius|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/MSR-ra-61-b-1-DM.jpg/500px-MSR-ra-61-b-1-DM.jpg
Attila the Hun
Qin Shi Huang|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/QinShiHuang19century.jpg/500px-QinShiHuang19century.jpg
Charlemagne|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Charlemagne_denier_Mayence_812_814.jpg/500px-Charlemagne_denier_Mayence_812_814.jpg
Joan of Arc|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Joan_of_Arc_miniature_graded.jpg/500px-Joan_of_Arc_miniature_graded.jpg
William the Conqueror|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/William_the_Conqueror_%28TFA%29.jpg/500px-William_the_Conqueror_%28TFA%29.jpg
Richard the Lionheart|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Church_of_Fontevraud_Abbey_Richard_I_effigy.jpg/500px-Church_of_Fontevraud_Abbey_Richard_I_effigy.jpg
Saladin|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Al-Nasir_I_Salah_al-Din_Yusuf_%28Saladin%29._AH_564-589_%281169-1193_CE%29_%C3%86_Dirham_%2830.1mm%2C_13.28_g%2C_6h%29._Without_mint-name._Dated_AH_586_%28AD_1190-91%29._Sultan_sitting_facing%2C_cross-legged%2C_on_high-backed_throne_%28obverse%29.jpg/500px-thumbnail.jpg
Kublai Khan|https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/YuanEmperorAlbumKhubilaiPortrait.jpg/500px-YuanEmperorAlbumKhubilaiPortrait.jpg
Marco Polo|https://upload.wikimedia.org/wikipedia/commons/f/ff/Frontispice_%C3%A9dition_de_Nuremberg_1477_%28cropped%29.png
Mansa Musa|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Catalan_Atlas_BNF_Sheet_6_Mansa_Musa_%28cropped%29.jpg/500px-Catalan_Atlas_BNF_Sheet_6_Mansa_Musa_%28cropped%29.jpg
Ibn Battuta|https://upload.wikimedia.org/wikipedia/commons/9/9c/Handmade_oil_painting_reproduction_of_Ibn_Battuta_in_Egypt%2C_a_painting_by_Hippolyte_Leon_Benett..jpg
Leif Erikson|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Leif_Erikson_Statue%2C_Duluth_%2815290644106%29.jpg/500px-Leif_Erikson_Statue%2C_Duluth_%2815290644106%29.jpg
Ragnar Lothbrok|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Harley_MS_2278%2C_folio_39r_excerpt.jpg/500px-Harley_MS_2278%2C_folio_39r_excerpt.jpg
Christopher Columbus|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/500px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg
Vasco da Gama|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Ignoto_portoghese%2C_ritratto_di_un_cavaliere_dell%27ordine_di_cristo%2C_1525-50_ca._02.jpg/500px-Ignoto_portoghese%2C_ritratto_di_un_cavaliere_dell%27ordine_di_cristo%2C_1525-50_ca._02.jpg
Ferdinand Magellan|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Ferdinand_Magellan.jpg/500px-Ferdinand_Magellan.jpg
Montezuma|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Moctezuma_Mendoza.jpg/500px-Moctezuma_Mendoza.jpg
Henry VIII|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg/500px-After_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg
Queen Elizabeth I|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/500px-Darnley_stage_3.jpg
Queen Victoria|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/500px-Queen_Victoria_by_Bassano.jpg
Catherine the Great|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Catherine_II_after_Roslin%2C_Rokotov_%281780s%2C_Kunsthistorisches_Museum%29.jpg/500px-Catherine_II_after_Roslin%2C_Rokotov_%281780s%2C_Kunsthistorisches_Museum%29.jpg
Peter the Great|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Inconnu_d%27apr%C3%A8s_J.-M._Nattier%2C_Portrait_de_Pierre_Ier_%28mus%C3%A9e_de_l%E2%80%99Ermitage%29.jpg/500px-Inconnu_d%27apr%C3%A8s_J.-M._Nattier%2C_Portrait_de_Pierre_Ier_%28mus%C3%A9e_de_l%E2%80%99Ermitage%29.jpg
Ivan the Terrible|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/IoannIV_reconstruction_by_Gerasimov02.jpg/500px-IoannIV_reconstruction_by_Gerasimov02.jpg
Marie Antoinette|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Louise_Elisabeth_Vig%C3%A9e-Lebrun_-_Marie-Antoinette_dit_%C2%AB_%C3%A0_la_Rose_%C2%BB_-_Google_Art_Project.jpg/500px-Louise_Elisabeth_Vig%C3%A9e-Lebrun_-_Marie-Antoinette_dit_%C2%AB_%C3%A0_la_Rose_%C2%BB_-_Google_Art_Project.jpg
Louis XIV|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/500px-Louis_XIV_of_France.jpg
Suleiman the Magnificent|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/EmperorSuleiman.jpg/500px-EmperorSuleiman.jpg
Niccolò Machiavelli|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/500px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg
Michelangelo|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/500px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg
Galileo Galilei|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff/lossy-page1-500px-Galileo_Galilei_%281564-1642%29_RMG_BHC2700.tiff.jpg
Nicolaus Copernicus|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Nikolaus_Kopernikus_MOT.jpg/500px-Nikolaus_Kopernikus_MOT.jpg
Archimedes|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Domenico-Fetti_Archimedes_1620.jpg/500px-Domenico-Fetti_Archimedes_1620.jpg
Pythagoras|https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg/500px-Pythagoras_in_the_Roman_Forum%2C_Colosseum.jpg
Charles Darwin|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/500px-Charles_Darwin_seated_crop.jpg
Marie Curie|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/500px-Marie_Curie_c._1920s.jpg
Thomas Edison|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/500px-Thomas_Edison2.jpg
Alexander Graham Bell|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Alexander_Graham_Bell_1895_NPG_77_363.jpg/500px-Alexander_Graham_Bell_1895_NPG_77_363.jpg
The Wright Brothers|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Orville_Wright_1905-crop.jpg/500px-Orville_Wright_1905-crop.jpg
Henry Ford|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Henry_Ford_portrait_1915_original_%283x4_cropped%29.png/500px-Henry_Ford_portrait_1915_original_%283x4_cropped%29.png
Ada Lovelace|https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png/500px-Ada_Lovelace_daguerreotype_by_Antoine_Claudet_1843_-_cropped.png
Alan Turing|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Alan_turing_header.jpg/500px-Alan_turing_header.jpg
J. Robert Oppenheimer|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Oppenheimer_%28cropped%29.jpg/500px-Oppenheimer_%28cropped%29.jpg
Sigmund Freud|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/500px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg
Florence Nightingale|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/500px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg
George Washington|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/500px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg
Thomas Jefferson|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg/500px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29.jpg
Benjamin Franklin|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/500px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg
Alexander Hamilton|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Alexander_Hamilton_%28NPG%29.jpg/500px-Alexander_Hamilton_%28NPG%29.jpg
Harriet Tubman|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Carte-de-visite_portrait_of_Harriet_Tubman_%28cropped%29.jpg/500px-Carte-de-visite_portrait_of_Harriet_Tubman_%28cropped%29.jpg
Frederick Douglass|https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg/500px-Frederick_Douglass_%28circa_1879%29_%28cropped%29.jpg
Sitting Bull|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Sitting_Bull_by_D_F_Barry_ca_1883_Dakota_Territory.jpg/500px-Sitting_Bull_by_D_F_Barry_ca_1883_Dakota_Territory.jpg
Billy the Kid|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Billy_the_Kid_tintype%2C_Fort_Sumner%2C_1879-80-Edit2.jpg/500px-Billy_the_Kid_tintype%2C_Fort_Sumner%2C_1879-80-Edit2.jpg
Harry Houdini|https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Harry_Handcuff_Houdini_Crop.jpg/500px-Harry_Handcuff_Houdini_Crop.jpg
Winston Churchill|https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg/500px-Sir_Winston_Churchill_-_19086236948_%28restored%29.jpg
Franklin D. Roosevelt|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/FDR-1944-Campaign-Portrait_%283x4_retouched%2C_cropped%29.jpg/500px-FDR-1944-Campaign-Portrait_%283x4_retouched%2C_cropped%29.jpg
Theodore Roosevelt|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29_%283%29.jpg/500px-Theodore_Roosevelt_by_the_Pach_Bros_%284x5_cropped%29_%283%29.jpg
John F. Kennedy|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/500px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg
Malcolm X|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Malcolm_X_1964_press_photo_%28cropped%29_%28lighting_diff%29.jpg/500px-Malcolm_X_1964_press_photo_%28cropped%29_%28lighting_diff%29.jpg
Susan B. Anthony|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/SB_Anthony_from_RoRaWW.jpg/500px-SB_Anthony_from_RoRaWW.jpg
Simón Bolívar|https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png/500px-Sim%C3%B3n_Bol%C3%ADvar._Toro_Moreno%2C_Luis._1922%2C_Legislative_Palace%2C_La_Paz.png
Toussaint Louverture|https://upload.wikimedia.org/wikipedia/commons/c/cc/Toussaint_Louverture_par_Pierre-Charles_Baquoy.jpg
Karl Marx|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png/500px-Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png
Vladimir Lenin|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Lenin_in_1920_%28cropped%29.jpg/500px-Lenin_in_1920_%28cropped%29.jpg
Fidel Castro|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Fidel_Castro_1950s_%28cropped%29.jpg/500px-Fidel_Castro_1950s_%28cropped%29.jpg
Ho Chi Minh|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Ho_Chi_Minh_-_1946_Portrait_%28cropped%29.jpg/500px-Ho_Chi_Minh_-_1946_Portrait_%28cropped%29.jpg
Haile Selassie|https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Haile_Selassie_in_full_dress_%283x4_cropped%29.jpg/500px-Haile_Selassie_in_full_dress_%283x4_cropped%29.jpg
Menelik II|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Menelik_II_in_coronation_garb%2C_Emperor_of_Ethiopia.jpg/500px-Menelik_II_in_coronation_garb%2C_Emperor_of_Ethiopia.jpg
Empress Taytu|https://upload.wikimedia.org/wikipedia/commons/4/42/Taicron.gif
Shaka Zulu|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/KingShaka.jpg/500px-KingShaka.jpg
Kwame Nkrumah|https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Kwame_Nkrumah_Portrait%2C_The_National_Archives_UK.jpg/500px-Kwame_Nkrumah_Portrait%2C_The_National_Archives_UK.jpg
Patrice Lumumba|https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/PatriceLumumba1960.jpg/500px-PatriceLumumba1960.jpg
Thomas Sankara|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Thomas_Sankara_in_Harlem_%281984%29.png/500px-Thomas_Sankara_in_Harlem_%281984%29.png
Jane Austen|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/500px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg
Charles Dickens|https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/500px-Dickens_Gurney_head.jpg
Mark Twain|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Mark_Twain_by_AF_Bradley_%28cropped_2%29.jpg/500px-Mark_Twain_by_AF_Bradley_%28cropped_2%29.jpg
Edgar Allan Poe|https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg/500px-Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg
Ernest Hemingway|https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/500px-ErnestHemingway.jpg
Homer|https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Homer_At_the_British_Museum_2024_%283x4_cropped%29.jpg/500px-Homer_At_the_British_Museum_2024_%283x4_cropped%29.jpg
Dante Alighieri|https://upload.wikimedia.org/wikipedia/commons/e/ea/Bargello_-_Kapelle_Fresko_2a.jpg
Rasputin|https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Rasputin_PA.jpg/500px-Rasputin_PA.jpg
Vlad the Impaler|https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Vlad_%C5%A2epe%C5%9F%2C_the_Impaler%2C_Prince_of_Wallachia_%281456-1462%29_%28died_1477%29.jpg/500px-Vlad_%C5%A2epe%C5%9F%2C_the_Impaler%2C_Prince_of_Wallachia_%281456-1462%29_%28died_1477%29.jpg
`),

];

if (typeof module !== 'undefined') module.exports = { CATEGORIES };
