﻿define(
	 ({
		commonMedia: {
			mediaSelector: {
				lblSelect1: "Medijs",
				lblSelect2: "Saturs",
				lblMap: "Karte",
				lblImage: "Attēls",
				lblVideo: "Video",
				lblExternal: "Web lapa",
				disabled: "Šo funkciju administrators ir atspējojis",
				url: "Lai manuālie ievadītu attēla web adresi",
				userLookup: "Ielādēt albumus",
				notImplemented: "Vēl nav ieviests.",
				noData: "Nav atrasts publisks albums"
			},
			imageSelector: {
				lblStep1: "Izvēlēties servisu",
				lblStep2: "Izvēlēties mediju",
				lblStep3: "Konfigurēt"
			},
			imageSelectorHome: {
				explain: "Ielādējiet attēlus no sociālajiem medijiem<br /> vai tieši no URL"
			},
			imageSelectorFlickr: {
				userInputLbl: "Lietotāja vārds",
				signInMsg2: "Lietotājs nav atrasts",
				loadingFailed: "Ielāde neizdevās"
			},
			imageSelectorFacebook: {
				leftHeader: "Facebook Lietotājs",
				rightHeader: "Facebook Lapa",
				pageExplain: "Facebook lapa ir publisks zīmols/produkts vai slavenība, piem., <b>esrigis</b>. Jūs varat saņemt lapas nosaukumu, pēc pirmās \'/\' lapas URL.",
				pageInputLbl: "Lapas nosaukums",
				lookupMsgError: "Lapa nav atrasta"
			},
			imageSelectorPicasa: {
				userInputLbl: "E-pasta adrese vai Picasa/Google+ ID",
				signInMsg2: "Konts nav atrasts",
				howToFind: "Kā atrast Picasa vai Google+ konta ID",
				howToFind2: "Kopēt ciparus starp pirmo un otro \'/\' no jebkura Picasa vai G+ lapa"
			},
			videoSelectorCommon: {
				check: "Pārbaudīt",
				notFound: "Video nav atrasts",
				found: "Video atrasts",
				select: "Atlasīt šo video"
			},
			videoSelectorHome: {
				other: "Cits"
			},
			videoSelectorYoutube: {
				url: "Youtube video URL",
				pageInputLbl: "Lietotāja vārds",
				lookupMsgError: "Lietotājs nav atrasts",
				howToFind: "Kā atrast YouTube lietotāja vārdu",
				howToFind2: "Lietotāja vārds ir attēlots zem video",
				found: "Atrasts",
				noData: "Nav atrasti publiski video"
			},
			videoSelectorVimeo: {
				url: "Vimeo video URL"
			},
			videoSelectorOther: {
				explain1: "Karšu žurnāls nevar atskaņot neapstrādātus video (piemēram, avi, mpeg), bet var atskaņot viesotus video failus ar iebūvētiem atskaņotājiem (piemēram, YouTube vai Vimeo).",
				explain2: "Lielākā daļa video mitināšanas pakalpojumu piedāvā šo funkciju, jums ir jāatrod iespēja iegult video, nokopēt saņemto kodu un izmantot %WEBPAGE%.",
				explain3: "Ja video vēlaties viesot pats, varat arī izveidot HTML lapu, kurā tiek izmantots video atskaņotājs (piemēram, %EXAMPLE%), viesot šo lapu un arī izmantot %WEBPAGE%.",
				webpage: "Web lapas funkcija"
			},
			webpageSelectorHome: {
				lblUrl: "Web lapas URL",
				lblEmbed: "Iegult kodu",
				lblOR: "VAI",
				lblError1: "Kļūda, notīriet vienu no diviem ievades laukiem.",
				lblError2: "Iegultais kods var ietvert tikai vienu %IFRAMETAG%",
				configure: "Konfigurēt"
			},
			mediaConfigure: {
				lblURL: "URL",
				lblURLPH: "Attēla URL ir jāsākas ar http:// un jābeidzas ar .jpg vai .png",
				lblURLError: "Šķiet, ka šis attēls nav derīgs. Norādiet tiešu saiti uz attēla failu (jūsu vietrāža URL beigās parasti būs .jpg vai .png). Nedarbojas saites uz web lapu, kurā ir ietverts attēls.",
				lblURLCheck: "Notiek attēla pārbaude...",
				lblLabel: "Attēla teksts",
				lblLabel1: "Uzraksts",
				lblLabel2: "Novietot virs teksta",
				lblLabel3: "Neviens",
				lblLabelPH: "Ievadiet tekstu...",
				lblMaximize: "Attēla stūrī iekļaut maksimizēšanas pogu",
				lblMaximizeHelp: "Ieteicams tikai augstas kvalitātes foto",
				lblPosition: "Pozīcija",
				lblPosition1: "Centrs",
				lblPosition2: "Aizpildīt",
				lblPosition3: "Ietilpināt",
				lblPosition4: "Izstiept",
				lblPosition5: "Pielāgots",
				tooltipDimension: "Vērtību var norādīt \'px\' vai \'%\'",
				tooltipDimension2: "ķ_The value has to be specified in 'px'_ū",
				lblPosition2Explain: "(var apgriezt)",
				lblPosition3Explain: "(netiks apgriezts)",
				lblPosition3Explain2: "(platums vienmēr atbildīs panelim)",
				lblPosition4Explain: "(var tikt izkropļots)",
				unloadLbl: "ķ_Unload when reader navigates away to different section_ū",
				unloadHelp: "ķ_If the Web Page has audio or video media, keep this option checked to stop that content from playing when the reader navigates away to a different section. Uncheck it for example to keep a soundtrack playing as the reader advances through the journal.<br />If the Web Page is an application, uncheck this option so that the application does not reload if the reader returns to that section._ū"
			},
			editorActionGeocode: {
				lblTitle: "Adreses vai vietas noteikšana",
				mapMarkerExplain: "Noklikšķinot uz saites, lietotājam tiks rādīts kartes punkts"
			},
			editorActionMedia: {
				lblTitle: "Galvenā posma satura maiņa"
			},
			editorInlineMedia: {
				lblTitle: "Attēla, video vai web lapas ievietošana"
			}
		}
	})

);
