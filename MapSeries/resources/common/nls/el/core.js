﻿define(
	 ({
		commonCore: {
			common: {
				add: "Προσθήκη",
				edit: "Επεξεργασία",
				save: "Αποθήκευση",
				next: "Επόμενο",
				cancel: "Άκυρο",
				back: "Πίσω",
				apply: "Εφαρμογή",
				close: "Κλείσιμο",
				open: "Άνοιγμα",
				start: "Έναρξη",
				loading: "Φόρτωση",
				disabledAdmin: "Αυτή η λειτουργία έχει απενεργοποιηθεί από το Διαχειριστή",
				width: "Πλάτος",
				height: "Ύψος"
			},
			inlineFieldEdit: {
				editMe: "Επεξεργαστείτε!"
			},
			builderPanel: {
				panelHeader: "Εργαλείο δημιουργίας %TPL_NAME%",
				buttonSaving: "Αποθήκευση",
				buttonSaved: "Αποθηκεύτηκε",
				buttonShare: "Κοινοποίηση",
				buttonSettings: "Ρυθμίσεις",
				buttonHelp: "Βοήθεια",
				buttonPreview: "Προβολή σε πραγματικό χρόνο",
				tooltipFirstSave: "Αυτή η ενέργεια δεν είναι διαθέσιμη πριν αποθηκεύσετε.",
				tooltipNotShared: "Αυτή η ενέργεια δεν είναι διαθέσιμη πριν κοινοποιήσετε.",
				noPendingChange: "Δεν υπάρχει εκκρεμής αλλαγή",
				unSavedChangePlural: "Εκκρεμείς αλλαγές",
				closeWithPendingChange: "Είστε βέβαιοι ότι θέλετε να επιβεβαιώσετε αυτή την ενέργεια; Οι αλλαγές σας θα χαθούν.",
				saveError: "Η αποθήκευση απέτυχε, δοκιμάστε ξανά",
				shareStatus1: "Η εφαρμογή δεν έχει αποθηκευτεί ακόμη",
				shareStatus2: "Η εφαρμογή κοινοποιείται δημοσίως",
				shareStatus3: "Η εφαρμογή κοινοποιείται εντός του οργανισμού",
				shareStatus4: "Η εφαρμογή δεν κοινοποιείται"
			},
			saveError: {
				title: "Σφάλμα κατά την αποθήκευση της εφαρμογής",
				err1Div1: "Δεν είναι δυνατή η αποθήκευση της εφαρμογής, επειδή έχετε ήδη ένα άλλο αντικείμενο με το ίδιο όνομα (δείτε το <a class='linkagolroot' target='_blank'>φάκελο περιεχομένου</a> σας).",
				err1Div2: "Τροποποιήστε τον τίτλο της εφαρμογής σας και στη συνέχεια αποθηκεύστε την.",
				btnOk: "Επεξεργασία του τίτλου εφαρμογής"
			},
			share: {
				firstSaveTitle: "Η εφαρμογή αποθηκεύτηκε με επιτυχία",
				firstSaveHeader: "Η εφαρμογή σας είναι τώρα αποθηκευμένη στο %PORTAL%, αλλά δεν κοινοποιείται ακόμη.",
				firstSavePreview: "Προεπισκόπηση",
				firstSaveShare: "Κοινοποίηση",
				firstSaveA1: "Εάν δεν είστε εξοικειωμένοι με το %PORTAL% ή θέλετε μια συντόμευση για πρόσβαση στο περιβάλλον διαμόρφωσης του εργαλείου δημιουργίας, μπορείτε να αποθηκεύσετε το σύνδεσμο %LINK1%",
				firstSaveA1bis: "Μπορείτε επίσης να βρείτε την εφαρμογή στο <a href='%LINK2%' target='_blank'>φάκελο περιεχομένου του %PORTAL%</a>.",
				shareTitle: "Κοινοποίηση της εφαρμογής σας",
				sharePrivateHeader: "Η εφαρμογή σας δεν κοινοποιείται, θέλετε να την κοινοποιήσετε;",
				sharePrivateBtn1: "Κοινοποίηση δημοσίως",
				sharePrivateBtn2: "Κοινοποίηση στον οργανισμό μου",
				sharePrivateWarning: "Η κοινοποίηση %WITH% έχει απενεργοποιηθεί επειδή δεν είστε ο κάτοχος του <a href='%LINK%' target='_blank'>web χάρτη</a>.",
				sharePrivateWarningWith1: "δημοσίως",
				sharePrivateWarningWith2: "δημοσίως και στον Oργανισμό",
				sharePrivateProgress: "Κοινοποίηση σε εξέλιξη...",
				sharePrivateErr: "Η κοινοποίηση απέτυχε, δοκιμάστε ξανά ή",
				sharePrivateOk: "Η κοινοποίηση ενημερώθηκε με επιτυχία, φόρτωση...",
				shareHeader1: "Η εφαρμογή σας είναι <strong>προσβάσιμη δημοσίως</strong>.",
				shareHeader2: "Η εφαρμογή σας είναι προσβάσιμη από τα μέλη του οργανισμού σας (απαιτείται σύνδεση).",
				shareLinkCopy: "Αντιγραφή",
				shareLinkCopied: "Αντιγράφηκε",
				shareQ0: "Πώς μπορώ να ενσωματώσω την εφαρμογή σε μια ιστοσελίδα;",
				shareQ1Opt1: "Πώς μπορώ να διατηρήσω ιδιωτική την εφαρμογή;",
				shareQ1Opt2: "Πώς μπορώ να διατηρήσω ιδιωτική την εφαρμογή ή να την κοινοποιήσω δημοσίως;",
				shareA1: "Χρησιμοποιήστε το %SHAREIMG% στη <a href='%LINK1%' target='_blank'>σελίδα στοιχείων της εφαρμογής</a>.",
				shareQ2bis: "Πώς μπορώ να επιστρέψω στο περιβάλλον διαμόρφωσης του εργαλείου δημιουργίας;",
				shareA2div1: "Αποθηκεύστε και χρησιμοποιήστε ξανά το σύνδεσμο %LINK1% ή χρησιμοποιήστε τη <a href='%LINK2%' target='_blank'>σελίδα στοιχείων της εφαρμογής</a>.",
				shareA2div2: "Ως κάτοχος της εφαρμογής, όταν είστε συνδεδεμένοι στο %PORTAL%, η εφαρμογή περιλαμβάνει ένα κουμπί για άνοιγμα του εργαλείου δημιουργίας:",				
				shareQ3: "Πού αποθηκεύονται τα δεδομένα;",
				shareA3: "Τα δεδομένα και η διαμόρφωση του %TPL_NAME% αποθηκεύονται σε αυτό το <a href='%LINK2%' target='_blank'>web αντικείμενο εφαρμογής</a>. Εάν έχετε χρησιμοποιήσει εισαγωγή από Flickr, Picasa, Facebook ή YouTube, οι εικόνες και τα βίντεό σας δεν έχουν αναπαραχθεί στο %PORTAL%."
			},
			settings: {
				header: "Ρυθμίσεις",
				tabError: "Ελέγξτε όλες τις καρτέλες για σφάλματα"
			},
			settingsLayout: {
				title: "Διάταξη",
				explain: "Ποια διάταξη θέλετε να χρησιμοποιήσετε;",
				explainInit: "Μπορείτε να αλλάξετε τη διάταξη οποιαδήποτε στιγμή από το παράθυρο διαλόγου Ρυθμίσεις.",
				viewExample: "Δείτε ένα παράδειγμα σε πραγματικό χρόνο"
			},
			settingsTheme: {
				title: "Θέμα"
			},
			settingsHeader: {
				title: "Κεφαλίδα",
				logoEsri: "Λογότυπο Esri",
				logoNone: "Χωρίς λογότυπο",
				logoCustom: "Προσαρμοσμένο λογότυπο",
				logoCustomPlaceholder: "URL (μέγιστο μέγεθος 250x50 pixel)",
				logoCustomTargetPlaceholder: "Ενσωματωμένος σύνδεσμος",
				logoSocialExplain: "Προσαρμόστε το σύνδεσμο της κεφαλίδας.",
				logoSocialText: "Κείμενο",
				logoSocialLink: "Σύνδεσμος",
				lblSmallHeader: "Χρήση μικρής κεφαλίδας (χωρίς υπότιτλο)"
			},
			header: {
				title: "Επεξεργαστείτε τον τίτλο του %TPL_NAME%",
				subtitle: "Επεξεργαστείτε τον υπότιτλο του %TPL_NAME%"
			}
		}
	})
);
