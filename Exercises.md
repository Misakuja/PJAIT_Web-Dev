# LAB01
1. Dokument HTML
Stwórz dokument HTML, który będzie wyglądał podobnie jak na poniższym projekcie:

![image](https://github.com/user-attachments/assets/b40f6c31-4600-4987-a9d2-6c6c6f2361da)

Tekst i obrazek mogą być dowolne. Ważne by w dokumencie HTML znalazły się takie elementy, jak:
- lista linków z zagnieżdżoną pod-listą
- obrazek
- tabelka z wierszem nagłówkowym
- nagłówki i akapity z tekstem

2. Strona z CSS
Kod HTML z zadania 1 otrzymał style CSS. Wygląda teraz jak poniżej.

![image](https://github.com/user-attachments/assets/40604be1-772d-49a0-8328-990f16547faa)

Stwórz style CSS by Twoja strona z poprzedniego zadania wyglądała podobnie. Nie musi być identycznie, ale:
- Treść strony jest scrollowana (tylko prawa kolumna, nie cała strona)
- Strona jest wyśrodkowana
- Lewa kolumna strony jest półprzezroczysta (kolory i obraz w tle - dowolne)
- Stopka jest wyśrodkowana
- Inny kolor na główne linki nawigacyjne, inny na podkategorie
- Linkiem jest cały prostokąt na liście nawigacji, a nie tylko tekst
- Tabelka ma szerokość jak cała kolumna z treścią
- Co drugi wiersz tabelki ma inny kolor

3. Strona z CSS - wersja z rozwijanym menu
Strona www z poprzednich zadań otrzymała nowe style, zgodnie z poniższym rysunkiem:

![image](https://github.com/user-attachments/assets/bec8a695-94ac-4940-b63f-b295d9f0292d)

Stwórz style CSS by Twoja strona wyglądała podobnie. Tym razem ważne elementy to:
- Rozwijane menu: po najechaniu pojawia się lista zakładek należących do danego elementu listy
- Dwie kolumny na treść
- Stopka w trzech kolumnach
- Szerokość kolumn dostosowuje się do szerokości ekranu
- Ten sam kod HTML ma pasować zarówno do nowego stylu, jak i tego z zaadania 2 (do zmiany wyglądu powinna wystarczyć zmiana ścieżki do pliku CSS)!

---

# LAB02
1. Responsywna strona HTML i CSS
Stwórz stronę przy pomocy HTML, by wyglądała tak jak na poniższym projekcie

![image](https://github.com/user-attachments/assets/8e10c3d4-675d-4869-9112-1a9910e11a7f)

![image](https://github.com/user-attachments/assets/9b412cbc-1a5e-4ed3-aaa4-f2bad88eebc2)

Zdjęcia, teksty i kolory mogą być dowolne. Użyj:
- media queries do stworzenia responsywności (menu nawigacyjne, układ treści i zdjęć);
- flex lub grid – może być przydatny do układu treści;
- czcionki z Google Fonts (w przykładzie jest użyta czcionka Poppins).
- Przetestuj stronę zmieniając rozdzielczości na komputerze. Umieść stronę online, np. na szkolnym serwerze, a następnie przetestuj ją telefonem.

---

# LAB03
1. Strona www z użyciem LESS
Zadanie przedstawia lekko zmodyfikowaną stronę www z poprzednich zajęć.

![image](https://github.com/user-attachments/assets/24a84098-38b5-4d9d-bf16-ba7a0d422f71)

Napisz style do tej strony w technologii LESS:
- Podstawowy kolor zadeklaruj jako zmienną.
- Uzyskaj różne odcienie przy pomocy funkcji kolorystycznych.
- 
Użyj:
- zagnieżdżonych selektorów,
- zagnieżdżonych media query,
- przynajmniej jednego mixina.
- 
Aby skompilować LESS do CSS użyj jednego z poniższych:
- wtyczki do Twojego edytora kodu (dla Visual Studio Code: Easy LESS),
- kompilatora online,
- biblioteki JS kompilującej kod.

2. Strona www z użyciem SCSS
Wszystkie powyższe kroki powtórz dla technologii SCSS. Porównaj obie strony, czy wyglągają tak samo.

Wtyczka dla Visual Studio Code: Easy Sass lub Live Sass Compiler.

---

# LAB04

1. Strona z Bootstrap
Stwórz stronę (tylko strona główna), wyglądającą jak na poniższych zrzutach ekranu. Uwagi:

- Użyj frameworka Bootstrap, wersja 5.
- Nie pisz żadnego swojego kodu CSS, korzystaj tylko z klas Bootstrap'a.
- Zwróć uwagę na wielkość boksów z aktualnościami, zależnie od ekranu.
- Na widoku mobilnym, po kliknięciu w "hamburger", powinno rozwinąć się menu.

![image](https://github.com/user-attachments/assets/5650c380-b5fe-4c4d-b0e8-b19276772bf8)

![image](https://github.com/user-attachments/assets/ccd67d51-fb85-4883-9b76-02bbf532b223)

![image](https://github.com/user-attachments/assets/2bef88b0-bf55-4ae9-95bc-4e3febfa2dce)

2. Strona z Tailwind
Stwórz stronę (tylko strona główna), wyglądającą jak na poniższych zrzutach ekranu. Uwagi:
- Użyj frameworka Tailwind.
- Nie pisz żadnego swojego kodu CSS, korzystaj tylko z klas Tailwind'a.
- Na widoku mobilnym, menu może być na stałe rozwinięte.

![image](https://github.com/user-attachments/assets/dd5871ec-1756-4a31-8fae-496d888cd192)

![image](https://github.com/user-attachments/assets/cddf7334-ea5c-4a79-8291-52c42e9d67b8)

![image](https://github.com/user-attachments/assets/b779e081-a7cf-468e-848b-1b9f490b9313)

---

# LAB05
W każdym zadaniu należy napisać w Javascript funkcję, której wynik będzie widoczny w konsoli przeglądarki.

1. Pitagoras
Napisz funkcję, sprawdzającą, czy dane trzy liczby tworzą „trójkę pitagorejską” (uwaga – liczby nie muszą być podane w kolejności rosnącej).

2. Pętla
Napisz funkcję wypisującą wszystkie liczby z przedziału a-b, podzielne przez c.

Napisz funkcję wypisującą w konsoli tabliczkę mnożenia o boku podanym jako parametr.

> tabliczka(3);
```
1 2 3
2 4 6
3 6 9
```

4. Ciąg Fibonacciego
Napisz funkcję wypisującą w konsoli ciąg Fibonacciego o długości podanej jako parametr.

5. Choinka
Napisz funkcję rysującą choinkę o podanej wysokości.

> choinka(4);
```
*
**
***
****
```

6. Choinka nocą
Napisz funkcję rysującą „choinkę nocą” o podanej wysokości (szerokość jest tu nieco większa niż wysokość).

> choinkaNoca(6);
```
*********
**** ****
***   ***
**     **
*       *
*********
```

7. Pola figur: switch
Napisz funkcję liczącą pole wybranej figury (prostokąt, trapez, równoległobok, trójkąt) z wykorzystaniem instrukcji switch. Każda figura powinna mieć osobną funkcję do liczenia pola.

8. Pascal
Napisz funkcję wypisującą w konsoli trójkąt Pascala o wysokości podanej jako parametr.

---

# LAB06
1. Pola figur - Callback
Zadanie liczące pola figur (zajęcia 5, numer 7) przekształć by działało z wykorzystaniem Callback.
- Każda funkcja licząca pole (prostokąt, trapez, równoległobok, trójkąt), powinna być zapisana do zmiennej.
- Główny program powinien działać bez użycia instrukcji warunkowej (bez if, switch, pętli).
- Do głównego programu, funkcja licząca pole powinna być przekazana jako parametr
> pole(trojkat, 5, 6); //gdzie trojkat to funkcja zwracająca pole trójkąta
```
15
```

2. Cenzura
Napisz funkcję cenzurującą zdanie.
- Funkcja ma otrzymać 2 parametry: zdanie do cenzurowania i niedozwolone słowo.
- Niedozwolone słowo ma zostać zastąpione znakiem *.
> cenzura("Ala ma kota i psa", "kot");
```
Ala ma *a i psa
```

3. Cenzura masowa
- Przerób swoją funkcję cenzurującą zdanie, by działała jako parametr funkcji array.map().
- Efektem działania powinno być ocenzurowanie całej tablicy słów.

> let tablica = ['kotlet', 'kotka', 'koty', 'pies'];

> let wynik = tablica.map( //tu będzie parametr - zmodyfikowana funkcja...
```
['*let', '*ka', '*y', 'pies'] //wynik
```

4. Sortowanie
Napisz funkcję, którą będzie można użyć w funkcji array.sort(), umożliwiającą posortowanie tablicy wg reszty z dzielenia przez 3.

> let arr = [10, 11, 13, 12, 14, 15];
> let sorted = arr.sort(mojafunkcja);
```
[12, 15, 10, 13, 11, 14]
```

5. Filtrowanie
Dana jest tablica dwuwymiarowa. Każdy z jej elementów sam jest tablicą, zawierającą kolejno: imię, nazwisko, wiek. Np: ['Jan', 'Kowalski', 21].

Napisz funkcję, z użyciem array.filter(), która wyfiltruje wszystkie osoby z tablicy o wieku powyżej 20 lat.
> let arr = [ ['Jan', 'Kowalski', 21], ['Anna', 'Nowak', 19], ['Jan', 'Trzeci', 27] ];
> let x = arr.filter(mojafunkcja);
```
[ ['Jan', 'Kowalski', 21], ['Jan', 'Trzeci', 27], ]
```

6. Mapowanie
Napisz funkcję, która wykona działanie na tablicy z poprzedniego zadania, aby wynik wyglądał jak na przykładzie poniżej. Użyj array.map().
```
[
  'Jan | Kowalski | 21',
  'Anna | Nowak | 19',
  'Jan | Trzeci | 27'
]
```

---

# LAB07
1. Samochody
Dany jest Obiekt:
```
 auto {rok, przebieg, cena_wyjsciowa, cena_koncowa}.
```
Napisz następujące metody w obiekcie:
a) Metoda, która powiększa cenę wyjściową o 1000.
b) Metoda, która obniża cenę końcową o 1000 za każdy rok wieku auta (względem ceny wyjściowej).
c) Metoda, która obniża cenę końcową o 10000 za każde 100000km przebiegu auta.
d) Metoda, która dopisuje do auta podany przebieg i rok (automatycznie przeliczając cenę wg powyższych funkcji).

Stwórz tablicę obiektów typu auto oraz funkcje do niej:
e) Funkcja, która dopisze auto do tablicy samochodow, jesli jego cena jest wieksza niz 10000.
f) Funkcja, ktora dla wszystkich aut z tablicy zwieksza rok o 1.

> let tablica = [];
> let a1 = new Auto(2024, 100000, 9000);
> let a2 = new Auto(2024, 100000, 20000);
> dopiszDoTablicy(a1);
> dopiszDoTablicy(a2);
> zwiekszRok();
> console.log(tablica);

```
[ // tylko jedno auto spełniło warunek dopisania do tablicy
    {
    rok: 2025, // rok zwiększony o 1
    przebieg: 100000,
    cena: 20000,   
    }
]
```

2. Studenci
a) Stwórz klasę Ocena z konstruktorem. Ma mieć 2 pola:
- przedmiot – nazwa przedmiotu,
- wartosc – wartość liczbowa oceny.

b) Stwórz klasę Student, zawierającą: *tablicę ocen,
- pole na średnią ocen,
- konstruktor (parametry, imię i nazwisko),
- metodę hello, zwracającą komunikat powitalny z imieniem, nazwiskiem i aktualną średnią ocen.

> let s = new Student(‘Jan’, ‘Kowalski’);
> console.log(s.hello());
```
Witaj Jan Kowalski, Twoja średnia ocen to: 0.
```
c) Do klasy Student dodaj setter set oceny(x). Jeśli x jest obiektem klasy Ocena, ma zostać dopisany do tablicy ocen. Równocześnie ma zostać przeliczona średnia ocen.
d) Do klasy Student dodaj getter get oceny(). Powinien zwrócić aktualne oceny studenta, dodane przy pomocy settera, w komunikacie tekstowym, w formacie jak powyżej.
> console.log(s.oceny);
```
Przedmiot: WPR - ocena 4. Przedmiot: TIN - ocena 3. Przedmiot: POJ - ocena 2.
```

---

# LAB08

1. Samochody tabelka
Stwórz tablicę obiektów typu auto (Lab7, zadanie 1).

```
auto {rok, przebieg, cena_wyjsciowa, cena_koncowa}.
```
Przy pomocy JS zbuduj element DOM – tabelkę zawierającą dane z tych obiektów. Umieść tabelkę na stronie www przy pomocy JS.

2. Studenci - strona z akordeonem
Stwórz tablicę obiektów typu student (Lab7, zadanie 2).
```
 student {
    imie,
    nazwisko,
    srednia,
    oceny //tablica obiektów ocena {przedmiot, wartosc}
 }
```
a) Przy pomocy JS zbuduj elementy DOM, by studenci wyświetlali się na stronie, jak na rysunku.

![image](https://github.com/user-attachments/assets/6379cc20-967f-4111-8ae5-dddd98537e23)

b) Dodaj do tego CSS, na przykład taki:

c) Spraw, by na kliknięcie belki z nazwiskiem, dane studenta zwijały się i rozwijały. Podpowiedź:
- Zdefiniuj klasy css dla elementu rozwiniętego i zwiniętego
- JavaScript na kliknięcie belki z nazwiskiem podmieni jej klasę, co automatycznie doprowadzi do zmiany wyglądu.

![image](https://github.com/user-attachments/assets/1ac430c8-f28c-4cb2-a048-d442f962cfd8)

---

# LAB09

1. Prosta modyfikacja DOM.
   Stwórz 4 divy w HTML oraz 4 przyciski. Do przycisków dodaj następujące działanie:

- przycisk 1 – doda kolejny div do 4 istniejących divów
- przycisk 2 – usunie pierwszy div (kolejne naciśnięcie usunie kolejny div i tak dalej)
- przycisk 3 – zmieni kolor tła diva numer 3
- przycisk 4 – wpisze tekst „nowy tekst” do wszystkich divów.

2. Kalkulator
   Stwórz prosty kalkulator z wykorzystaniem HTML, CSS, JS. Powinien zawierać:
- dwa inputy na wpisanie liczb,
- wybór działania z listy (dodawanie, odejmowanie, mnożenie, dzielenie) i przycisk uruchamiający liczenie,
- styl CSS na wzór poniższego obrazka
- kod JavaScript przeprowadzający obliczenie i wyświetlający wynik w HTML
- obsługę dzielenia przez zero: komunikat o błędzie.

![image](https://github.com/user-attachments/assets/5b7c203b-476b-4aed-b4ab-743e20f20640)

3. Responsywne menu nawigacyjne
Do strony www z zajęć o CSS (np. z Lab2) dodaj responsywność: menu główne na małych ekranach powinno być zwinięte do „hamburgera” (bez używania gotowych bibliotek).

Przykładowe kroki:
- element klikalny „hamburger” widoczny tylko na małych rozdzielczościach
- kod JavaScript, który po kliknięciu na hamburger zmienia klasę listy nawigacyjnej
- styl listy nawigacyjnej na małe rozdzielczości (domyślnie niewidoczna, po zmianie klasy – widoczna, zakładki wyświetlają się jedna pod drugą)

[Przykład](https://mobirise.com/bootstrap-menu/bootstrap-navigation-menu-template.html)

4. Lightbox
Przy pomocy HTML, CSS, JS zbuduj galerię zdjęć typu Lightbox bez używania gotowych bibliotek.

[Przykład](https://www.cssscript.com/demo/modal-image-gallery-swg/)
