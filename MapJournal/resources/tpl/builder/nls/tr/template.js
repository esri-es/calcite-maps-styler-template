﻿define(
	 ({
		builder: {
			layouts: {
				mainStage: "Ana Aşama",
				sideTitle: "Kenar Panosu",
				sideDescr: "Fotoğraflarınızı, videolarınızı ve haritalarınızı açık ve net bir mesajda mükemmel biçimde birleştiren metin yoğun hikaye düzeni.",
				floatTitle: "Kayar Pano",
				floatDescr: "Kartografinizi odağa koyarken, öykü anlamına yardımcı olan saydam kısa formlu bir metin paneline izin veren bir çıktı görünümü."
			},
			common: {
				lblStatus1: "Yayınlananlar",
				lblStatus2: "Taslak",
				lblStatus3: "Gizli"
			},
			settingsLayoutOptions: {
				title: "Düzen seçenekleri",
				cfgLeft: "Sol",
				cfgRight: "Sağ",
				cfgSmall: "Küçük",
				cfgMedium: "Orta",
				cfgLarge: "Büyük",
				socialLinksLabel: "Paylaşma bağlantılarını her bölümün en altında görüntüle",
				socialLinksDescr: "ı_This enables readers to reference and promote specific sections of your %TPL_NAME%. For instance, if you use a sections share icon, readers will land at that specific %TPL_NAME% section rather than the beginning of your story. Your readers can use the social media link in the title section to promote your entire %TPL_NAME% (header tab) and have them land at the start of the %TPL_NAME%._İ"
			},
			settingsLayoutFonts: {
				title: "Yazı Tipleri",
				defaultLbl: "ı_Default_İ",
				sectionTitleLbl: "ı_Section title_İ",
				sectionContentLbl: "ı_Section content_İ"
			},
			initPopup: {
				title: "Hoş geldiniz:"
			},
			addEditPopup: {
				disabled: "Bölüm Ekle özelliği devre dışı çünkü maksimum izin verilen bölüm sayısı aşılmış.",
				titleAdd: "Bölüm Ekle",
				titleAddHome: "Ana Bölüm Ekle",
				titleEdit: "Bölüm Düzenle",
				step: "Adım",
				stepMainStageExplain: "Ana Aşama İçeriği",
				stepPanelExplain: "İçerik",
				stepMainStageNextTooltip: "Bölüm başlığı gir ve Ana Aşama içeriğini belirle",
				stepMainStageNextTooltip2: "Ana Aşama içeriğini seç",
				step2NextTooltip: "Bölüm başlığını ve %LAYOUT-TYPE% içeriğini gir",
				stepNextTooltipNext: "sonraki adıma gitmek için",
				stepNextTooltipAdd: "bölüm eklemek için",
				firstAddExplain: "Bu birinci bölüm Ana Bölümünüzdür, bunu öykünüzün 'kapak sayfası' olarak düşünün. Henüz tanımladığınız başlık büyük yazı tipinde görüntülenecektir.",
				firstAddLeanMore: "Daha Fazla Bilgi",
				titlePlaceholder: "Bölüm başlığı..."
			},
			addEditViewText: {
				editorPlaceholder: "Buraya metin, bağlantı ve küçük grafikler ekleyin.",
				editorActionsTitle: "Ana Aşama Eylemleri",
				editorActionsHelpDescr: "Bu denetimleri kullanarak ana aşamayı değiştirecek bağlantıları oluşturun. Örneğin, okuyucu bir bağlantıya tıkladığında haritayı belirli bir konuma yakınlaştırmak, başka bir web haritası görüntülemek veya bir resim göstermek isteyebilirsiniz.",
				mainStageDisabled: "Ana Aşama Eylemleri, düzenleyici maksimuma getirildiğinde devre dışı bırakılır"
			},
			organizePopup: {
				title: "Düzenle",
				lblHeader: "İçeriğinizi düzenlemek için sürükleyip bırakın.",
				lblColTitle: "Başlık",
				lblColPubDate: "Yayımlanma tarihi",
				lblColStatus: "Durum",
				checkDisplayReverse: "Bölümleri ters sırada göster",
				btnApplyWarning: "%NB% bölümlerinin silinmesini onayla",
				deleteTooltip: "Sil",
				firstSectionExplain: "(Ana sayfa bölümü taşınamaz)",
				exportMainStage: "Ana Aşama içeriği",
				exportPanel: "Panel içeriği",
				exportActions: "Ana Aşama eylemleri"
			},
			exportData: {
				btn: "İçeriği dışa aktar",
				tooltip: "İçeriğinizin dışa aktarılması, içeriğinizi yanlışlıkla silmeniz durumunda gerekecek bir yedek oluşturmanızı ve görüntülemenizi sağlar. İçeriği sayfadan kopyalamanız ve bir kelime işlemciye yapıştırmanız yeterlidir."
			},
			help: {
				lblHelp: "Yardım",
				lblAdd: "Bölüm Ekle",
				lblSettings: "Ayarlar",
				lblOrga: "İçeriği düzenle",
				lblEdit: "Düzenlemeler",
				lblPublish: "Paylaş",
				lblTips: "İpuçları",
				lblMore: "Daha çok mu istiyorsunuz?",
				lblLink: "Esri Story Maps web sitesini ziyaret edin.",
				content1Div1: "Hikayenizi oluştururken çeşitli stiller kullanabilirsiniz. <strong>%LAYOUT_TITLE%</strong> genellikle metninizi, resimlerinizi ve videonuzu saklar, haritalarınız ise <strong>Ana Aşama</strong> içindedir. Bununla birlikte %TPL_NAME%, size resimleri, grafikleri ve videoyu da ana aşama içinde gösterme olanağı tanır.",
				content1Div2: "Bölüm ekleme, hikaye aktarma deneyiminizi gerçek anlamda özelleştirmenize olanak tanır. Okuyucular %LAYOUT_TITLE% metninizde ilerledikçe, Ana Aşama üzerindeki bir harita temel noktalara genişleyerek veya yakınlaşarak ya da yeni haritalara ve resimlere otomatik geçiş yaparak mesajınızı destekler.",
				content2Div1: "ı_Here is where you can adjust how your %TPL_NAME% looks. Color schemes, layouts, widths, and fonts are all refined here._İ",
				content2Div2: "Ayrıca Facebook, Twitter ve Bitly paylaşım bağlantıları ekleyerek, okuyucularınızın %TPL_NAME% adınızı kolayca diğerlerine yaymasını sağlayabilirsiniz.",
				content3Div1: "İçeriğiniz bölümlere ayrılmıştır. İstediğiniz kadar çok bölüm oluşturabilirsiniz (bunları alt bölümler olarak düşünün). Bu alt bölümlerin akışı önemlidir; bölümleri Düzenle içinden istediğiniz gibi yeniden sıralayabilir veya silebilirsiniz.",
				content4Div1: "Bir hata mı buldunuz ya da malzemenizi mi değiştirmek istiyorsunuz? Hiç sorun değil. İçeriğinizde değişiklik yapmak için uygulama içinde düzenle simgesini arayın. %TPL_NAME% uygulamanızı geliştirirken düzenleme işlevlerini çok sık kullanacaksınız!",
				content5Div1: "%TPL_NAME% adınız %PORTAL% hesabınıza kaydedilir ve varsayılan olarak özeldir. Bunu kuruluşunuzla paylaşmayı seçebilir ya da dünyaya açabilirsiniz. Hatta size sunduğumuz kısaltılmış bir URL ile daha kolay paylaşabilirsiniz.",
				content6Div1: "Ana bölümünüzün başlığı ayrıca bülteninizin de başlığıdır. Ana bölümünüzü bülteninizin \'kapak sayfası\' olarak düşünün. Ana Bölüm başlığı, okuyucularınız bültende gezerken görünür kalacaktır.",
				content6Div2: "%LAYOUT_TITLE% başlığınız yalnızca metin olmak zorunda değildir, fotoğraflar ve videolar da ekleyerek öyküyü daha canlı hale getirebilir ve uzun metin kısımlarını ayırabilirsiniz!"
			},
			landing: {
				lblAdd: "Harita Bülteninize ne ad vermek istersiniz?",
				phAdd: "Başlığınızı girin...",
				lblOR: "Veya",
				lblHelp: "Tanıtım Gezisi"
			},
			firstAddSplash: {
				thisis: "Burası:",
				lblMain: "Bu %BR% Ana Aşamasıdır"
			}
        }
    })

);
