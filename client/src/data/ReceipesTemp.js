import SoupImg from '../resources/img/receipes/dyniowa.jpeg';
import KalImg from '../resources/img/receipes/kalafior.jpeg';
import SalatImg from '../resources/img/receipes/salatka.jpeg';
import BulImg from '../resources/img/receipes/bulki.jpeg';
import PizzaImg from '../resources/img/receipes/pizza.jpeg';

export const receipes = [
    {
        id: 1,
        name: 'Zupa dyniowa',
        photo: SoupImg,
        mark: 4,
        ingredients: '1 mała dynia Hokkaido (do 1 kg) 2 ziemniaki 2 marchewki 1 litr bulionu (wcześniej ugotowanego, ewentualnie z kostki rosołowej) 1 mała cebula sok z połowy cytryny ½ łyżeczki zmielonego imbiru w proszku (lub świeżego, tylko to już do smaku, bo świeży imbir jest bardziej intensywny) sól, pieprz, gałka muszkatołowa, cukier trochę słodkiej śmietany 30- 36% (dodaję ok. 100ml)',
        preparing: 'Dynię umyć, przekroić na pół, oczyścić z pestek i włókien. Następnie pokroić w kostkę razem ze skórką. Ziemniaki i marchewki umyć, obrać i pokroić w kostkę. Cebulę obrać i pokroić w kostkę. Dynię, ziemniaki, marchewki i cebulę ugotować na bulionie do miękkości. Zupę zmiksować np. blenderem na krem. Doprawić sokiem z cytryny, imbirem, solą, pieprzem, gałką muszkatołową i szczyptą cukru. Dodać śmietanę. (Można ją dodać podczas miksowania lub dolać do zupy rozlanej na talerzach).',
        description: 'Zdrowy i smaczny posiłek',
        productQuantityList: [
            {
                id: 1,
                quantity: 300,
                productName: 'makaron tagliatelle'
            },
            {
                id: 2,
                quantity: 200,
                productName: 'pierś z kurczaka'
            },
            {
                id: 3,
                quantity: 50,
                productName: 'szpinak mrożony'
            },
            {
                id: 4,
                quantity: 100,
                productName: 'serek śmietabkowy almette'
            },
            {
                id: 5,
                quantity: 10,
                productName: 'oliwa z oliwek'
            }
        ],
    },
    {
        id: 2,
        name: 'Kalafior zapiekany pod sosem serowym',
        photo: KalImg,
        mark: 4,
        ingredients: '1 kalafior\\\\n\\\' +\\n\' +\n' +
            '            \'      \\\'25 g masła\\\\n\\\' +\\n\' +\n' +
            '            \'      \\\'2 łyzki mąki pszennej\\\\n\\\' +\\n\' +\n' +
            '            \'      \\\'300 ml mleka\\\\n\\\' +\\n\' +\n' +
            '            \'      \\\'150 g startego żółtego sera\\\\n\\\' +\\n\' +\n' +
            '            \'      \\\'3 łyżki płatków migdałów',
        preparing: '1. Kalafiora umyć, oddzielić różyczki, ugotować w posolonej wodzie.\\n\' +\n' +
            '      \'2. Ułożyć w naczyniu do zapiekania.\\n\' +\n' +
            '      \'3. Na patelni roztopić masło, dodać mąkę i chwilę smażyć, co chwilę mieszając.\\n\' +\n' +
            '      \'4. Dodać mleko, cały czas mieszając, aż powstanie gęsty sos.\\n\' +\n' +
            '      \'5. Następnie dodać starty ser, rozmieszać, do całkowitego roztopienia. Przyprawić.\\n\' +\n' +
            '      \'6. Sosem polać kalafiora. Piec w 200 stopniach ok 15 min.\\n\' +\n' +
            '      \'7. W połowie pieczenia posypać zapiekankę płatkami migdałów.',
        description: 'zdrowe, wiele węglowodanów',
        productQuantityList: [
            {
                id: 1,
                quantity: 300,
                productName: 'makaron tagliatelle'
            },
            {
                id: 2,
                quantity: 200,
                productName: 'pierś z kurczaka'
            },
            {
                id: 3,
                quantity: 50,
                productName: 'szpinak mrożony'
            },
            {
                id: 4,
                quantity: 100,
                productName: 'serek śmietabkowy almette'
            },
            {
                id: 5,
                quantity: 10,
                productName: 'oliwa z oliwek'
            }
        ],
    },
    {
        id: 3,
        name: 'Wiosenna sałatka z mango i bratkami',
        photo: SalatImg,
        mark: 5,
        ingredients: '1dojrzałe mango\\n\' +\n' +
            '            \'0,5 opakowania mozzarelli mini\\n\' +\n' +
            '            \'2 łyżki orzechów nerkowca\\n\' +\n' +
            '            \'1 garść sałat mix\\n\' +\n' +
            '            \'kilka kwiatków bratka',
        preparing: '1. Sałatę układam na talerzu .\\n\' +\n' +
            '      \'Na to obrane i pokrojone w kostkę mango.\\n\' +\n' +
            '      \'Dodaję osączoną z zalewy mini mozzarellę.\\n\' +\n' +
            '      \'2. Orzechy nerkowca prażę na suchej patelni .\\n\' +\n' +
            '      \'Układam kwiatki bratka na sałatce.\\n\' +\n' +
            '      \'3. Mieszam składniki potrzebne do sosu miodowego i polewam sałatkę .',
        description: 'dużo witamin z grupy D',
        productQuantityList: [
            {
                id: 1,
                quantity: 300,
                productName: 'makaron tagliatelle'
            },
            {
                id: 2,
                quantity: 200,
                productName: 'pierś z kurczaka'
            },
            {
                id: 3,
                quantity: 50,
                productName: 'szpinak mrożony'
            },
            {
                id: 4,
                quantity: 100,
                productName: 'serek śmietabkowy almette'
            },
            {
                id: 5,
                quantity: 10,
                productName: 'oliwa z oliwek'
            }
        ],
    },
    {
        id: 4,
        name: 'Bułeczki jogurtowe',
        photo: BulImg,
        mark: 3,
        ingredients: '1. Zagnieść: mąkę, jogurt, proszek do pieczenia, olej, sól i cukier.\\n\' +\n' +
            '            \'Gotowe ciasto przełożyć na stolnicę obsypaną mąką.\\n\' +\n' +
            '            \'Odrywać po kawałku i formować.\\n\' +\n' +
            '            \'Bułeczki w odstępach ułożyć na blasze wyłożonej papierem do pieczenia.\\n\' +\n' +
            '            \'Na środku każdej bułki zrobić krzyżyk.\\n\' +\n' +
            '            \'Za pomocą pędzelka posmarować mlekiem i posypać dowolnie: makiem, sezamem lub słonecznikiem.\\n\' +\n' +
            '            \'Włożyć do rozgrzanego piekarnika i piec około 20-25 min (termoobieg) w temp. 160 stopni do zarumienienia.',
        preparing: '1. Zagnieść: mąkę, jogurt, proszek do pieczenia, olej, sól i cukier.\\n\' +\n' +
            '      \'Gotowe ciasto przełożyć na stolnicę obsypaną mąką.\\n\' +\n' +
            '      \'Odrywać po kawałku i formować.\\n\' +\n' +
            '      \'Bułeczki w odstępach ułożyć na blasze wyłożonej papierem do pieczenia.\\n\' +\n' +
            '      \'Na środku każdej bułki zrobić krzyżyk.\\n\' +\n' +
            '      \'Za pomocą pędzelka posmarować mlekiem i posypać dowolnie: makiem, sezamem lub słonecznikiem.\\n\' +\n' +
            '      \'Włożyć do rozgrzanego piekarnika i piec około 20-25 min (termoobieg) w temp. 160 stopni do zarumienienia.',
        description: 'pożywne i smaczne',
        productQuantityList: [
            {
                id: 1,
                quantity: 300,
                productName: 'makaron tagliatelle'
            },
            {
                id: 2,
                quantity: 200,
                productName: 'pierś z kurczaka'
            },
            {
                id: 3,
                quantity: 50,
                productName: 'szpinak mrożony'
            },
            {
                id: 4,
                quantity: 100,
                productName: 'serek śmietabkowy almette'
            },
            {
                id: 5,
                quantity: 10,
                productName: 'oliwa z oliwek'
            }
        ],
    },
    {
        id: 5,
        name: 'Pizzerinki ze szparagami',
        photo: PizzaImg,
        mark: 4,
        ingredients: '350 g mąki pszennej\\n\' +\n' +
            '      \'230 g jogurtu naturalnego\\n\' +\n' +
            '      \'16 g proszku do pieczenia\\n\' +\n' +
            '      \'70 ml oleju rzepakowego\\n\' +\n' +
            '      \'2 szczypty soli\\n\' +\n' +
            '      \'łyżeczka cukru\\n\' +\n' +
            '      \'\\n\' +\n' +
            '      \'Dodatkowo:\\n\' +\n' +
            '      \'odrobina mleka\\n\' +\n' +
            '      \'odrobina maku, sezamu lub słonecznika',
        preparing: '1. Ciepłą wodę wlewamy do miski. Wsypujemy drożdże, sól, cukier i bazylię. Mieszamy i odstawiamy na 15 minut.\\n\' +\n' +
            '            \'2. Mąkę przesiewamy do miski, wlewamy rozczyn i zagniatamy ciasto.\\n\' +\n' +
            '            \'Na koniec wlewamy rozpuszczone masło i zagniatamy do momentu uzyskania gładkiego ciasta.\\n\' +\n' +
            '            \'3. Ciasto przykrywamy ściereczką i odstawiamy na 30 minut.\\n\' +\n' +
            '            \'Ciasto dzielimy na kuleczki ( kuleczka wielkości mandarynki).\\n\' +\n' +
            '            \'Spłaszczamy i wykładamy na natłuszczoną blaszkę.\\n\' +\n' +
            '            \'Każdy placek smarujemy kechupem.\\n\' +\n' +
            '            \'Cebulę obieramy i kroimy w piórka.\\n\' +\n' +
            '            \'Kiełbaskę kroimy w plasterki.\\n\' +\n' +
            '            \'Szaparagi kroimy w kostkę.\\n\' +\n' +
            '            \'Ser trzemy na tarce o dużych oczkach.\\n\' +\n' +
            '            \'Na każdy placek układamy kilka cebulę, kiełbaskę i szaparagi, posypujemy serem.\\n\' +\n' +
            '            \'4. Posypujemy odrobiną soli i pieprzu oraz suszoną bazylią.\\n\' +\n' +
            '            \'Pieczemy 20-25 minut w 190 stopniach.\\n\' +\n' +
            '            \'Podajemy z ulubionymi sosami.',
        description: 'pożywne i smaczne',
        productQuantityList: [
            {
                id: 1,
                quantity: 300,
                productName: 'makaron tagliatelle'
            },
            {
                id: 2,
                quantity: 200,
                productName: 'pierś z kurczaka'
            },
            {
                id: 3,
                quantity: 50,
                productName: 'szpinak mrożony'
            },
            {
                id: 4,
                quantity: 100,
                productName: 'serek śmietabkowy almette'
            },
            {
                id: 5,
                quantity: 10,
                productName: 'oliwa z oliwek'
            }
        ],
    },
]
