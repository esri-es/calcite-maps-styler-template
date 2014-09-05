﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Obszar główny",
				sideTitle: "Panel boczny",
				sideDescr: "Układ dla opowiadania z dużą ilością tekstu, doskonały do połączenia zdjęć, filmów wideo oraz map w przejrzystą prezentację.",
				floatTitle: "Panel przestawny",
				floatDescr: "Układ umożliwiający wyróżnienie map, którym towarzyszy przezroczysty panel z krótkimi informacjami tekstowymi pomagającymi w przedstawieniu opowiadania."
			},
			common: {
				lblStatus1: "Opublikowane",
				lblStatus2: "Wersja robocza",
				lblStatus3: "Ukryte"
			},
			settingsLayoutOptions: {
				title: "Opcje układu",
				cfgLeft: "Lewy",
				cfgRight: "Prawy",
				cfgSmall: "Mały",
				cfgMedium: "Średni",
				cfgLarge: "Duży",
				socialLinksLabel: "Wyświetlaj łącza do udostępniania u dołu każdej sekcji",
				socialLinksDescr: "ł_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%._ą"
			},
			settingsLayoutFonts: {
				title: "Czcionki",
				defaultLbl: "ł_Default_ą",
				sectionTitleLbl: "ł_Section title_ą",
				sectionContentLbl: "ł_Section content_ą"
			},
			initPopup: {
				title: "Witamy w"
			},
			addEditPopup: {
				disabled: "Opcja Dodaj sekcję jest wyłączona, ponieważ osiągnięto maksymalną liczbę dozwolonych sekcji.",
				titleAdd: "Dodaj sekcję",
				titleAddHome: "Dodaj sekcję Start",
				titleEdit: "Edytuj sekcję",
				step: "Etap",
				stepMainStageExplain: "Zawartość obszaru głównego",
				stepPanelExplain: "Zawartość",
				stepMainStageNextTooltip: "Wpisz tytuł sekcji i wybierz zawartość, która znajdzie się w obszarze głównym",
				stepMainStageNextTooltip2: "Wybierz zawartość, która znajdzie się w obszarze głównym",
				step2NextTooltip: "Wpisz tytuł sekcji i zawartość, która będzie wyświetlana w układzie %LAYOUT-TYPE%",
				stepNextTooltipNext: "aby przejść do kolejnego etapu",
				stepNextTooltipAdd: "aby dodać sekcję",
				firstAddExplain: "Pierwsza sekcja to sekcja Start, którą należy postrzegać jako „okładkę” swojej historii. Tytuł, który właśnie podałeś, będzie wyświetlony dużą czcionką.",
				firstAddLeanMore: "Dowiedz się więcej",
				titlePlaceholder: "Tytuł sekcji"
			},
			addEditViewText: {
				editorPlaceholder: "Tutaj możesz dodać tekst, łącza oraz niewielkie elementy graficzne.",
				editorActionsTitle: "Operacje w obszarze głównym",
				editorActionsHelpDescr: "Użyj tych kontrolek do utworzenia łączy, które zmienią obszar główny. Na przykład, gdy użytkownik kliknie łącze, może nastąpić powiększenie mapy do określonej lokalizacji, wyświetlenie innej mapy internetowej lub wyświetlenie obrazu.",
				mainStageDisabled: "Operacje w obszarze głównym nie mogą być wykonywane, gdy okno edytora jest zmaksymalizowane."
			},
			organizePopup: {
				title: "Organizuj",
				lblHeader: "Przeciągaj i upuszczaj sekcje, aby zorganizować zawartość.",
				lblColTitle: "Tytuł",
				lblColPubDate: "Data publikacji",
				lblColStatus: "Status",
				checkDisplayReverse: "Wyświetlaj sekcje w odwrotnej kolejności",
				btnApplyWarning: "Potwierdź usunięcie %NB% sekcji",
				deleteTooltip: "Usuń",
				firstSectionExplain: "(Sekcji Start nie można przenieść).",
				exportMainStage: "Zawartość obszaru głównego",
				exportPanel: "Zawartość panelu",
				exportActions: "Operacje w obszarze głównym"
			},
			exportData: {
				btn: "Eksportuj zasoby",
				tooltip: "Dzięki eksportowaniu zawartości możesz przeglądać i utworzyć jej kopię zapasową na wypadek, gdyby została ona przez przypadek usunięta. Wystarczy skopiować zawartość strony i wkleić ją do dowolnego edytora tekstu."
			},
			help: {
				lblHelp: "Pomoc",
				lblAdd: "Dodaj sekcję",
				lblSettings: "Ustawienia",
				lblOrga: "Organizuj zawartość",
				lblEdit: "Edycje",
				lblPublish: "Udostępnij",
				lblTips: "Wskazówki",
				lblMore: "Chcesz mieć więcej możliwości?",
				lblLink: "Odwiedź witrynę Esri Story Maps.",
				content1Div1: "Podczas tworzenia opowiadania możesz łączyć różne style. W układzie <strong>%LAYOUT_TITLE%</strong> zwykle znajduje się tekst, obrazy oraz filmy wideo, mapy natomiast są na ogół widoczne w <strong>obszarze głównym</strong>. Jednak aplikacja %TPL_NAME% pozwala również na umieszczenie w obszarze głównym także obrazów obiektów, diagramów i filmów wideo.",
				content1Div2: "Dodanie sekcji umożliwia personalizację korzystania z aplikacji opowiadania. Możliwe jest dostosowanie aplikacji tak, aby podczas przewijania tekstu w układzie %LAYOUT_TITLE% mapa znajdująca się w obszarze głównym była przesuwana i powiększana do najważniejszych punktów lub automatycznie przełączane były nowe mapy i obrazy, stanowiące kontekst dla przekazywanych treści.",
				content2Div1: "ł_Here is where you can adjust how your %TPL_NAME% looks. Color schemes, layouts, widths, and fonts are all refined here._ą",
				content2Div2: "Możesz również dodać łącza udostępniania w serwisach Facebook, Twitter i Bitly, dzięki czemu użytkownicy będą mogli łatwo rozpowszechniać aplikację %TPL_NAME% wśród szerokiego grona odbiorców.",
				content3Div1: "Zawartość jest podzielona na sekcje. Liczba sekcji, które można dodać jest nieograniczona (sekcje są w postaci niewielkich rozdziałów). Sposób i kolejność prezentacji rozdziałów są bardzo ważne. Na ekranie Organizuj można zmieniać kolejność sekcji lub usuwać je wedle uznania.",
				content4Div1: "Czy znaleziono błąd w aplikacji, czy chcesz zmienić materiały? Odszukaj ikonę edycji w odpowiednim miejscu w aplikacji i zmodyfikuj zawartość. Podczas tworzenia aplikacji %TPL_NAME% konieczne może być wielokrotne korzystanie z funkcji edycji!",
				content5Div1: "Aplikacja %TPL_NAME% zostaje zapisana na koncie w portalu %PORTAL% i domyślnie zostaje oznaczona jako prywatna. Użytkownik może zadecydować, czy będzie ona udostępniona instytucji, czy też dostępna dla użytkowników z całego świata. W celu ułatwienia użytkownikom udostępniania zapewniamy im skrócony adres URL.",
				content6Div1: "Tytuł sekcji Start jest także tytułem Twojego Dziennika; sekcję Start należy postrzegać jako „okładkę” swojego opowiadania. Tytuł sekcji Start będzie widoczny, gdy użytkownicy będą poruszali się po Dzienniku.",
				content6Div2: "%LAYOUT_TITLE% nie musi mieć wyłącznie formy tekstowej, pomyśl o dodaniu zdjęć, dzięki którym ożywisz opowiadanie oraz o podzieleniu długiego tekstu!"
			},
			landing: {
				lblAdd: "Jak chcesz nazwać Dziennik mapy?",
				phAdd: "Wpisz tytuł...",
				lblOR: "Lub",
				lblHelp: "Dowiedz się więcej"
			},
			firstAddSplash: {
				thisis: "To jest",
				lblMain: "To jest %BR% obszar główny"
			}
        }
    })

);
