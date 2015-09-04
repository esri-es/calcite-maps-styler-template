﻿define(
	 ({
		viewer: {
			loading: {
				step1: "تحميل التطبيق",
				step2: "تحميل البيانات",
				step3: "بدأ الجولة",
				loadBuilder: "التبديل إلى وضع المُنشىء",
				redirectSignIn: "إعادة التوجيه لصفحة تسجيل الدخول",
				redirectSignIn2: "(سيتم إعادة توجيهك هنا بعد تسجيل الدخول)",
				fail: "عفواً، فشل أثناء تحميل جولة داخل الخريطة",
				failButton: "إعادة المحاولة"
			},
			errors: {
				boxTitle: "حدث خطأ",
				portalSelf: "خطأ فادح: فشل في الحصول على تكوين المدخل",
				invalidConfig: "خطأ فادح: تكوين غير صحيح",
				invalidConfigOwner: "خطأ فادح: تكوين غير صحيح (يتطلب المالك المُخول)",
				invalidConfigNoWebmap: "خطأ فادح: تكوين غير صحيح (معرف خريطة الويب أو التطبيق غير محدد في  index.html)",
				createMap: "يتعذر إنشاء الخريطة",
				invalidApp: "خطأ فادح: لا يمكن تحميل التطبيق",
				noLayer: "لا تحتوي خريطة الويب على طبقة بيانات صحيحة لجولة داخل الخريطة.",
				noLayerMobile: "مرحباً بك في تطبيق الويب جولة داخل الخريطة. لم يتم تكوين التطبيق. لم يتم دعم منشئ جولة داخل الخريطة في أجهزة الجوال.",
				noLayerView: "مرحباً بك في تطبيق الويب جولة داخل الخريطة.<br />لم يتم تكوين التطبيق بعد.",
				appSave: "خطأ اثناء حفظ تطبيق الويب",
				mapSave: "خطأ أثناء حفظ خريطة الويب",
				featureServiceLoad: "خطأ أثناء تحميل خدمة المعلم",
				notAuthorized: "لست مخولاً لتكوين التطبيق للوصول إلى هذا التطبيق",
				oldBrowserTitle: "التصفح غير مدعم بالكامل",
				noBuilderIE8: "لا يُدعم منشئ جولة داخل الخريطة إصدار أقل من 9 لبرنامج Internet Explorer.",
				ie10Win7Explain: "منشئ Map Tour التفاعلي غير مدعوم على Internet Explorer 10  على نظام التشغيل Windows 7 عندما يكون مصدر البيانات خدمة معلم مع المرفقات. لاستخدام خدمة معلم مع المرفقات. يجب <a target='_blank' href='http://msdn.microsoft.com/en-us/library/ie/hh920756(v=vs.85).aspx'> فرض وضع المستند إلى معايير Internet Explorer 9 يدويًا</a>, <a target='_blank' href='http://news.softpedia.com/news/كيفية إزالة IE10 والرجوع إلى IE9 على نظام التشغيل Windows-7 -308998.shtml'>أو الترقية إلى Windows 8.",
				oldBrowserExplain: "لا يدعم هذا المستعرض إنشاء الصورة المصغرة تلقائيًا من الصور التي قمت بتحميلها على جولة الخريطة. يمكن إنشاء جولة الخريطة باستخدام هذا المستعرض، ولكن يجب توفير صورة مصغرة منفصلة لكل من الصور التي قمت بتحميلها.",
				oldBrowserExplain2: "لتحسين القدرات، <a href='http://browsehappy.com/' target='_blank'>upgrade your browser</a> or <a href='http://www.google.com/chromeframe/?redirect=true' target='_blank'>قم بتنشيط إطار Google Chrome من أجل Internet Explorer</a>.",
				oldBrowserExplain3: "منشىء Map Tour لا يعمل مع Internet Explorer 10 على نظام التشغيل Windows XP.",
				oldBrowserClose: "إغلاق"
			},
			mobileHTML: {
				showIntro: "إظهار العنوان",
				hideIntro: "إخفاء العنوان",
				navList: "قائمة",
				navMap: "خريطة",
				navInfo: "الوسائط",
				introStartBtn: "بدء"
			},
			desktopHTML: {
				storymapsText: "قصة داخل خريطة",
				builderButton: "الانتقال إلى وضع المنشئ",
				facebookTooltip: "مشاركة على الفيس بوك",
				twitterTooltip: "مشاركة على تويتر",
				bitlyTooltip: "الحصول على رابط قصير",
				bitlyStartIndex: "الارتباط بالمكان الحالي"
			},
			builderHTML: {
				panelHeader: "تكوين التطبيق",
				buttonSave: "حفظ",
				buttonSettings: "الإعدادات",
				buttonShare: "مشاركة",
				buttonView: "عرض الوضع",
				buttonItem: "فتح عنصر تطبيق الويب",
				buttonHelp: "تعليمات",
				buttonOrganize: "ترتيب",
				buttonAdd: "إضافة",
				buttonImport: "استيراد",
				buttonImportDisabled: "لا يتوافر الاستيراد عند استخدام خدمة معلم مع المرفقات",
				dataEditionDisabled: "يكون إصدار البيانات معطل على مصدر بيانات CSV",
				dataSourceWarning: "لقد تم تغيير طبقة بيانات جولة الخريطة. إذا لم يكن معرف المعالم نفس الشيء، يجب عليك إعادة تعيين الترتيب والنقاط المخفية من خلال <b>المنظمة</b>. إذا اختلفت أسماء الحقول، يجب عليك إعادة تعيين إعدادات الحقول أسفل <b>علامة تبويب البيانات في الإعدادات</b>.",
				organizeWarning: "تكون إحدى النقاط أو العديد من النقاط المضافة خارج المنشئ التفاعلي مخفية.",
				dataPicError0a: "تشمل هذه الجولة <b>%NB%</b> عناوين URL غير متوافقة لصورة.",
				dataPicError0b: "قد تشمل هذه الجولة <b>%NB%</b> عناوين URL غير متوافقة لصورة.",
				dataPicError1: "تتطلب جولة الخريطة الآن أن ينتهي عنوان URL الخاص بالصورة بأحد الامتدادات التالية: .jp(e)g أو .png أو .gif أو .bmp",
				dataPicError2: "لن يؤثر هذا المطلب على جولة الخريطة المنشورة الحالية، ومع ذلك يتعين عليك أولاً حل مشكلة عنوان URL بهدف استخدام المنشئ التفاعلي من خلال تنفيذ أحد الإجراءين التاليين:",
				dataPicError3: "تحرير عناوين URL",
				dataPicError4: "يقوم ذلك بإضافة <i>#isImage</i> إلى نهاية عناوين URL للصورة غير المدعومة. وتدعم معظم الخوادم ملحقات URL، ومع ذلك بمجرد تنفيذ هذا الإجراء، يتعين عليك التحقق من أن عناوين URL للصورة المُحدثة هي عناوين عملية بالتنقل خلال النقاط. إذا تم تحميل كل صورة، فإنه يمكنك الآن حفظ جولة الخريطة. إذا <b>تم تعطيل الصور، لا تحفظ جولة الخريطة</b>. وبدلاً من ذلك، قم بإعادة تحميل المُنشئ وتنفيذ الإجراء الثاني.",
				dataPicError5: "تقييد الجولة للصور",
				dataPicError6: "يؤدي هذا الخيار إلى التعامل مع جميع عناوين URL على أنها صور، ولكن لن تتمكن من إضافة مقاطع فيديو باستخدام المنشئ التفاعلي. كما أن هذا الإجراء قابل للانعكاس، ويتعين عليك تقرير إضافة الفيديو مستقبلاً.",
				dataPicError7: "تم تقييد جولة الخريطة إلى الصورة، ولا يمكن استخدام مقاطع الفيديو. وإذا اخترت إزالة التقييد، تحقق من تحميل الصور بشكل صحيح قبل حفظ جولة الخريطة، ولن تتمكن من استعادة ذلك التقييد لاحقًا إذا لزم الأمر.",
				dataPicError8: "إزالة تقييد الصورة",
				dataPicError9: "إذا كانت عناوين URL تشير إلى مقاطع الفيديو، يمكنك تجاهل هذا التحذير، أما إذا كانت تشير إلى صورة، فإنه يتعين عليك تنفيذ أحد الإجراءين التاليين:",
				modalCancel: "إلغاء الأمر",
				modalApply: "تطبيق",
				organizeHeader: "ترتيب الجولة",
				organizeGeneralCaption: "استخدام السحب والإفلات لفرز نقاط الجولة",
				organizeDelete: "حذف",
				organizeHide: "إخفاء",
				organizeReset: "إعادة تعيين الترتيب والنقاط المخفية",
				addMaxPointReached: "لقد تم الوصول إلى أقصى عدد من النقاط والمخولة عن طريق مجموعة الرموز ولا يمكن إضافة نقطة أخرى للجولة.<br /><br />لاحظ أن إذا تم حذف النقاط الحالية، فسوف تحتاج إلى إعادة تحميل التطبيق.",
				addMaxPointReachedMobile: "نأسف، وصلت إلى الحد الأقصى من النقاط المخولة ويتعذر إضافة هذه الصورة.",
				addClose: "إغلاق",
				addHeader: "إضافة نقطة جديدة للجولة",
				addTabPicture: "الوسائط",
				addTabInformation: "معلومات",
				addTabLocation: "الموقع",
				addSelectCaption: "تحديد الصورة أو إفلاتها",
				addNoteVideo: "راجع التعليمات حول استخدام الفيديو",		
				addSelectCaptionNoFileReader: "تحديد صورة",	
				addChangePhoto: "تغيير الصورة والصورة المصغرة",
				addPictureResolutionIntro: "دقة الصورة أعلى من ما هو مطلوب:",
				addPictureResolutionOldBrowser: "دقة الصورة أعلى مما هو مطلوب. قم بتحسين أداء الجولة داخل الخريطة عن طريق تحديد الدقة الأقل من %RECOMMENDED_RES%.",
				addPictureResolutionResize: "تغيير دقة الصورة إلى %RESOLUTION%",
				addPictureResolutionKeep: "الحفاظ على الدقة الأصلية %RESOLUTION%",
				addSelectThumbnail: "حدد الصورة المُصغرة",
				addNoThumbSelected: "لم يتم تحديد صورة مُصغرة",
				addThumbSelected: "مُحددة",
				addCameraSettingsHeader: "إعدادات الكاميرا",
				addThumbnailHeader: "صورة مُصغرة",
				addLabelPicUrl: "الصورة",
				addLabelThumbUrl: "الصورة المصغرة",
				addTextPlaceholderUrl: "أدخل عنوان URL للصورة",
				addTextPlaceholderUrl2: "أدخل عنوان URL لصفحة YouTube",
				addTextPlaceholderUrl3: "أدخل عنوان URL لصفحة Vimeo",
				addTextPlaceholderUrl4: "أدخل عنوان URL لتضمين مقاطع الفيديو",
				addLabelVideo: "فيديو",
				addMediaVideoOther: "أخرى",
				addMediaVideoHelp: "افحص عنوان URL واحصل على الصورة المصغرة الافتراضية",
				addMediaVideoHelpTooltip1: "تم الفحص بنجاح",
				addMediaVideoHelpTooltip2: "فشل الفحص",
				addMediaVideoHelpTooltip4: "العثور على الخيار لتضمين مقاطع الفيديو ونسخ عنوان URL للفيديو الموجود في الكود",
				addLabelName: "الاسم",
				addLabelDescription: "تسمية وضيحية",
				addTextPlaceholder: "أكتب شيء",
				addLocatePlaceholder: "تحديد عنوان أو مكان",
				addPinColor: "لون",
				addLatitude: "خط العرض",
				addLongitude: "خط الطول",
				addLatitudePlaceholder: "مثال 34.056",
				addLongitudePlaceholder: "مثال -117.195",
				addUploading: "تحميل نقطة الجولة",
				addSave: "إضافة نقطة الجولة",
				addMobileUploading: "تحميل الصورة",
				addMobileName: "أدخل الاسم",
				addMobileNameMandatory: "خطأ، الرجاء إدخال الاسم",
				addMobileError: "نأسف، يوجد خطأ ما",
				settingsHeader: "إعدادات التطبيق",
				settingsTabLayout: "المخطط",
				settingsTabColor: "ألوان",
				settingsTabLogo: "رأس الصفحة",
				settingsTabFields: "البيانات",
				settingsTabExtent: "المدى",
				settingsTabZoom: "مستوى التكبير أو التصغير",
				settingsLayoutExplain: "تحديد المخطط الطباعي للتطبيق الذي تريده.",
				settingsLayoutProfessional: "مخطط ثلاثي اللوحات",
				settingsLayoutModern: "مخطط متكامل",
				settingsLayoutSelected: "مخطط محدد",
				settingsLayoutSelect: "حدد هذا المخطط",
				settingsLayoutNote: "لاحظ من على النقاط باستخدام مقاطع الفيديو،توضع دائمًا اللافتة أسفل الفيديو حتى إذا لم يكن هذا الخيار محددًا.",
				settingsLayoutLocBtn: "اعرض زر \"تحديد موقع\"",
				settingsLayoutLocBtnHelp: "يتم دعم الوظائف على معظم أجهزة الجوال ومستعرضات سطح المكتب (Internet Explorer 9)",
				settingsColorExplain: "تغيير الظهور عن طريق اختيار نسق مُعرف من قبل أو إنشاء الخاص بك.",
				settingsLabelColor: "ألوان الرأس والمحتوى والذيل",
				settingsLogoExplain: "تخصيص شعار (الحد الأقصى 250 x 50 px).",
				settingsLogoEsri: "شعار Esri",
				settingsLogoNone: "لا يوجد شعار",
				settingsLogoCustom: "تخصيص الشعار",
				settingsLogoCustomPlaceholder: "عنوان URL للصورة",
				settingsLogoCustomTargetPlaceholder: "انقر فوق الرابط",
				settingsLogoSocialExplain: "تخصيص عنوان الرابط الموجود أعلى اليمين.",
				settingsLogoSocialText: "النص",
				settingsLogoSocialLink: "رابط",
				settingsLogoSocialDisabled: "لقد تم تعطيل هذا المعلم بواسطة المدير",
				settingsDataFieldsExplain: "تحديد اسم الصورة والتسمية التوضيحية وحقول الألوان.",
				settingsDataFieldsError: "لم يقم التطبيق بتحديد اسم التطبيق والتسمية التوضيحية وبيانات الألوان. يرجى تحديد الحقول لاستخدامها هنا. ويمكن تغيير الإعدادات في وقت لاحق.",
				settingsFieldsLabelName: "الاسم",
				settingsFieldsLabelDescription: "تسمية وضيحية",
				settingsFieldsLabelColor: "لون",
				settingsFieldsReset: "إعادة تعيين تحديد الحقول",
				settingsExtentExplain: "تعيين النطاق الأولي لـ Map Tour خلال الخريطة التفاعلية الموضحة أدناه.",
				settingsExtentExplainBottom: "سيقوم النطاق الذي تقوم بتعريفة بتعديل النطاق الأولي لخريطة الويب. لاحظ أن هذا النطاق لم يستخدم في حالة عدم تضمينه نقطة الجولة الأولى. وفي تلك الحالة، سوف يتم فتح الجولة متمركزة على النقطة الأولى.",
				settingsExtentDateLineError: "لا يجوز أن يتجاوز المدى خط طول 180 درجة",
				settingsExtentDateLineError2: "حدث خطأ أثناء حساب النطاق",
				settingsExtentDrawBtn: "ارسم النطاق الجديد",
				settingsExtentModifyBtn: "تحرير النطاق",
				settingsExtentApplyBtn: "معاينة رحلة في الخريطة",
				settingsExtentUseMainMap: "استخدام مدى جولة في الخريطة",
				settingsZoomExplain: "تحديد التكبير أو التصغير لنقاط القصة التي تلحق بالمقدمة (اختياري).",
				settingsLabelZoom: "المقياس/ المستوى",
				settingsZoomFirstValue: "لا شيء",
				settingsFieldError: "الرجاء تحديد حقل في كل قائمة",
				dataTitle: "استضافة ArcGIS Online",
				dataExplain: "سيتم إضافة خدمة المعالم إلى خريطة الويب. سيتعذر مشاركتها مع أي شخص، وستكون الشخص الوحيد القادر على إضافة وتحرير وحذف الامتيازات.<br /><br />لاحظ في حالة مشاركة التطبيق من خلال صفحة العنصر، سيطلب النظام ما إذا كنت ترغب أيضًا في مشاركة خدمة المعالم. هذه الخطوة تكون مطلوبة. ستظل الشخص الوحيد الحاصل على امتيازات التحرير.",
				dataNameLbl: "اسم الخدمة",
				dataFolderListLbl: "المجلد",
				dataFolderListFetching: "جارِ البحث عن المجلدات...",
				dataRootFolder: "الجذر",
				dataNameError: "أدخل الاسم لخدمة المعلم",
				dataFolderError: "حدد المجلد الصحيح",
				dataSrcContainsInvalidChar: "يحتوي اسم خدمة المعلم على حرف غير صحيح أو أكثر  (<, >, #, %, :, \", ?, &, +, /, or \).",
				dataSrvAlreadyExistsError: "يتواجد اسم الخدمة من قبل داخل المؤسسة. يرجى اختيار اسم مختلف.",
				dataBtnSave: "إنشاء الخدمة",
				dataFooterProgress: "الإنشاء قيد التقدم",
				dataFooterSucceed: "تم نجاح الإنشاء. جارِ التحميل",
				dataFooterError: "خطأ أثناء الإنشاء. يرجى المحاولة مرة أخرى",
				tabError: "يرجي التحقق من وجود أخطاء في جميع علامات التبويب",
				introRecordBtn: "مقدمة",
				introRecordActivate: "استخدم النقطة الأولى كمقدمة (لا تظهر في المكتبة)"
			},
			addPopupJS: {
				uploadingPicture: "تحميل الصورة",
				uploadSuccess: "تحميل غير ناجح",
				uploadError: "خطأ أثناء تحميل الصورة",
				uploadError2: "خطأ في إضافة المعلم (علامة html غير صحيحة)",
				notJpg: "يرجى اختيار صورة jpeg للتحميل",
				errorNoPhoto: "اختر الصورة للتحميل",
				errorNoThumbnail: "اختر الصورة المُصغرة للتحميل",
				errorInvalidPicUrl: "أدخل صورة صحيحة (تبدأ بـ http(s):// وتنتهي بـ jpg أو png أو gif أو bmp). يمكنك إنهاء عنوان URL بـ '#isImage' لتجاوز هذه القاعدة.",
				errorInvalidThumbUrl: "أدخل صورة مصغرة صحيحة (تبدأ بـ http(s):// وتنتهي بـ jpg أو png أو gif أو bmp).",
				errorInvalidVideoUrl: "أدخل عنوان URL صحيح للفيديو (يبدأ بـ http(s)://(",
				errorNoName: "ادخل اسم لنقطة الجولة",
				errorNoDescription: "ادخل تسمية توضيحية لنقطة الجولة",
				errorNoLocation: "تحديد الموقع لنقطة الجولة"
			},
			builderJS: {
				noPendingChange: "لا توجد أي تغيرات غير محفوظة",
				unSavedChangeSingular: "1 تغيير غير محفوظ",
				unSavedChangePlural: "تغييرات غير محفوظة",
				shareStatus1: "لم يتم حفظ الجولة",
				shareStatus2: "لم يتم مشاركة الجولة بشكل عام",
				shareStatus3: "يتم مشاركة الجولة داخل المنظمة",
				shareStatus4: "لم يتم مشاركة الجولة",
				popoverDiscard: "هل تريد تجاهل أية تغييرات غير محفوظة؟",
				yes: "نعم",
				no: "لا",
				popoverLoseSave: "عند فتح العارض، سوف تخسر أية تغييرات غير محفوظة",
				ok: "موافق",
				popoverSaveWhenDone: "لا تنسى الحفظ بعد الانتهاء",
				closeWithPendingChange: "هل تريد تأكيد الإجراء؟ سوف تخسر جميع التغييرات.",
				gotIt: "موافق",
				savingApplication: "حفظ التطبيق",
				saveSuccess: "تم حفظ التطبيق بنجاح",
				saveError: "حدث فشل أثناء الحفظ، يرجى المحاولة مرة أخرى",
				saveError2: "فشل الحفظ نظرًا لعلامة html غير الصحيحة في اسم أو وصف",
				saveError3: "يتعذر أن يكون العنوان فارغًا",
				dragColorPicker: "تحرك في المحيط<br />أو تغيير اللون",
				dataWarningExtent: "لديك بيانات خارج مدى خريطة الويب.ولن يتم استخدام تلك البيانات باعتبارها نقاط الجولة، ثم قم بتغيير مدى الخريطة إذا كنت تود استخدامها.",
				dataWarningVisibi: "طبقة الجولة داخل الخريطة غير مرئية داخل مدى خريطة الويب الحالي. تأكد أن طبقة جولة داخل الخريطة مرئية مع الخريطة الكبيرة %MAPSIZE%.",
				dataWarningEdit: "تحرير خريطة الويب",
				dataWarningClose: "إغلاق",
				signIn: "يرجى تسجيل الدخول بحساب داخل",
				signInTwo: "لحفظ التطبيق",
				switchBM: "تغيير خريطة الأساس"
			},
			organizePopupJS: {
				messageStart: "قد تم الاختيار للحذف",
				messageSinglePoint: "نقطة الجولة الوحيدة",
				messageMultiPoint: "نقاط الجولة",
				messagePermantRemove: "ودائماً سوف تقوم بحذف",
				messageRecord: "تسجيل",
				messageRecordPlural: "تسجيلات",
				messageConfirm: "من قاعدة البيانات. هل تريد المتابعة؟",
				labelButtonShow: "إظهار",
				labelButtonHide: "إخفاء"
			},
			picturePanelJS: {
				popoverDeleteWarningPicAndThumb: "سوف يتم حذف الصورة والصورة المُصغرة نهائياً",
				popoverDeleteWarningThumb: "سوف يتم حذف الصورة المُصغرة نهائياً.",
				popoverUploadingPhoto: "تحميل الصورة والصورة المُصغرة",
				popoverUploadingThumbnail: "تحميل الصورة المُصغرة",
				popoverUploadSuccessful: "تحميل غير ناجح",
				popoverUploadError: "فشل أثناء التحميل، يرجى المحاولة مرة أخرى",
				changePicAndThumb: "تغير الصورة",
				changeThumb: "تغيير الصورة المُصغرة",
				selectPic: "تغيير الوسائط",
				selectThumb: "تغيير الصورة المُصغرة",
				uploadPicAndThumb: "تطبيق"
			},
			headerJS:{
				editMe: "تحرير!",
				templateTitle: "تحديد عنوان القالب",
				templateSubtitle: "تحديد العنوان الفرعي للقالب"
			},
			crossFaderJS:{
				setPicture: "تحديد عنوان الصورة",
				setCaption: "تحديد التسمية التوضيحية للصورة"
			},
			importPopup: {
				title: "استيراد",
				prevBtn: "السابق",
				nextBtn: "التالي"
			},
			importPopupHome: {
				header: "أين يتم تخزين الصور الخاصة بك؟"
			},
			onlinePhotoSharingCommon: {
				pictures: "صور",
				videos: "فيديوهات",
				disabled: "لقد تم تعطيل هذا المعلم بواسطة المدير",
				disabledPortal: "هذه الميزة مُعطلة في Portal for ArcGIS",
				header1: "تتعين مشاركة الصور بشكل عام.",
				header2: "سيتم تحديد الاستيراد لـ %NB1% %MEDIA% الأول.",
				emptyDataset: "خطأ، لم يتم العثور على صور",
				footerImport: "استيراد",
				selectAlbum: "تحديد ألبوم عام",
				selectAlbum2: "تحديد ألبوم",
				pleaseChoose: "يرجى الاختيار",
				userLookup: "بحث في",
				userLookingup: "بحث في",
				csv: "مُشار إليه في CSV",
				advanced: "خيارات متقدمة",
				advancedScratchLbl: "ابدأ جولة جديدة",
				advancedScratchTip: "قم بإنشاء جولة فارغة التي تُمكنك من التعبئة يدويًا باستخدام المعالج.",
				advancedCSVLbl: "قم باستيراد بيانات الجولة من ملف CSV",
				advancedCSVTip: "قم باستيراد محتوى الجولة الخاص بك من ملف CSV.",
				advancedCommonTip: "يتطلب منك أن تكون الصور والفيديوهات متصلة بالإنترنت بالفعل.",
				select: "عمل تحديد",
				locUse: "استخدم موقع الصور الجغرافي",
				locExplain: "قد لا ترغب في استخدام موقع الصور حيث أنه يمكن العثور عليهم من الألبوم، الناتجة عن جميع الصور في نفس الموقع.",
				locExplain2: "قد لا ترغب في استخدام موقع الفيديوهات حيث يمكن توريثهم من إعدادات المستخدم، الناتجة في جميع الفيديوهات الموجودة في نفس الموقع."
			},
			viewFlickr: {
				title: "استيراد Flickr",
				header: "أدخل اسم مستخدم Flickr وحدد مجموعة صور أو علامة لكي يتم استيرادها.",
				userInputLbl: "أدخل اسم مستخدم",
				signInMsg2: "لم يتم العثور على المستخدم",
				selectSet: "تحديد مجموعة صور",
				selectTag: "أو حدد علامة",
				footerImportTag: "استيراد العلامة المحددة",
				footerImportSet: "استيراد المجموعة المحددة"
			},
			viewFacebook: {
				title: "استيراد Facebook",
				header: "المصادقة باستخدام حساب مستخدم Facebook أو استخدام الصفحة العامة. يمكن استخدام الألبومات الخاصة لإنشاء جولة الخريطة العامة التي لا تتطلب مصادقة مستخدم Facebook، الذي يسمح الاحتفاظ بخصوصية التعليقات.",
				leftHeader: "مستخدم Facebook",
				rightHeader: "صفحة Facebook",
				pageExplain: "صفحة Facebook هي علامة تجارية/منتج عام أو ذات شهرة مثل <b>esrigis</b>. يمكنك الحصول على اسم الصفحة بعد  \'/\' الأول في عنوان URL للصفحة.",
				pageInputLbl: "أدخل اسم الصفحة",
				lookupMsgError: "لم يتم العثور على الصفحة"
			},
			viewPicasa: {
				title: "استيراد Picasa/Google+",
				header: "أدخل البريد الإلكتروني أو المعرف لـ Picasa أو Google + الحساب.",
				userInputLbl: "أدخل بريد إلكتروني أو معرف",
				signInMsg2: "لم يتم العثور على الحساب",
				signInMsg3: "لا يوجد ألبوم عام",
				howToFind: "كيفية إيجاد Picasa أو Google+ أو معرف الحساب",
				howToFind2: "نسخ الأرقام بين الأول والثاني \'/\'  لأي من Picasa او صفحة G+"
			},
			viewCSV: {
				title: "استيراد CSV",
				uploadBtn: "تحديد ملف CSV أو إفلاته",
				resultHeaderEmpty: "ملف CSV فارغ",
				resultHeaderSuccess: "تم تحميل %NB_POINTS% نقاط بنجاح",
				resultHasBeenLimited: "لقد تم قصر الاستيراد على %VAL1% نقاط الأولى خارج %VAL2% للقيد من %VAL3% نقاط لكل جولة",
				browserSupport: "المستعرض الخاص بك غير مدعوم، لاستخدام CSV يجب عليك <a href='http://browsehappy.com/' target='_blank'>ترقية المستعرضr</a>أو استخدام عارض خرائط الويب ArcGIS.com (راجع التعليمات).",
				errorLatLng: "لم يتم العثور على حقول خطوط الطول والعرض. القيم المحتملة لخط العرض هي: <i>%LAT%</i> ولخط الطول هي: <i>%LONG%</i>.",
				errorFieldsExplain: "سيفشل التحميل بسبب تعذر إيجاد الحقول المطلوبة التالية",
				errorFieldsName: "<b>الاسم</b>القيم المحتملة هي: %VAL%",
				errorFieldsDesc: "<b>الوصف</b> القيم المحتملة هي: %VAL%",
				errorFieldsUrl: "<b>عنوان URL للصورة</b> القيم المحتملة هي: %VAL%",
				errorFieldsThumb: "<b>عنوان URL للصورة المصغرة</b> القيم المحتملة هي: %VAL%",
				errorFields2Explain: "فشل التحميل وذلك لأن CSV لا يستخدم نفس البيانات الجدولية مثل طبقة البيانات الجدولية التالية",
				errorFields2Name: "<b>الاسم</b> استخدم %VAL1% بدلا من %VAL2%",
				errorFields2Desc: "<b>الوصف</b> استخدم %VAL1% بدلا من %VAL2%",
				errorFields2Url: "<b>عنوان URL للصورة</b> استخدم %VAL1% بدلا من %VAL2%",
				errorFields2Thumb: "<b>عنوان URL للصورة المصغرة</b> استخدم %VAL1% بدلا من %VAL2%",
				resultFieldsAll: "تم استيراد جميع البيانات الجدولية",
				resultFieldsNotAll: "تعذر استيراد البيانات الجدولية التالية بسبب وجودها في طبقة الخريطة",
				resultFieldsNotAll2: "تم استيراد البيانات الجدولية التالية",
				footerNextBtnResult: "الاستيراد داخل خريطة الويب",
				footerProgress: "الاستيراد قيد التقدم",
				footerSucceed: "نجحت عملية الاستيراد.جارِ التحميل"
			},
			viewYoutube: {
				title: "استيراد YouTube",
				header: "أدخل اسم مستخدم YouTube لإيجاد مقاطع الفيديو المشتركة بشكل عام.",
				pageInputLbl: "أدخل اسم مستخدم YouTube",
				lookupMsgError: "لم يتم العثور على المستخدم",
				howToFind: "كيفية إيجاد اسم مستخدم YouTube",
				howToFind2: "يتم عرض اسم المستخدم أسفل الفيديوهات",
				found: "تم العثور",
				noData: "لم يتم العثور على الفيديوهات العامة"
			},
			viewGeoTag: {
				title: "حدد موقع الصور/الفيديوهات",
				header: "انقر أو اضغط فوق الصور التي ترغب في استيرادها لتحديد موقعهم.",
				headerMore: "لماذا لم يتم تحديد موقع الصور ومقاطع الفيديو جغرافيًا؟",
				headerExplain: "إذا كان للصور موقع صحيح، سيتم تحديد موقعها على الخريطة وإدراجها على علامة التبويب الثانية تلقائيًا.<br /><br />افتراضيًا لم يقوم كلا من Picasa وFlickr بتخزين بيانات EXIF الوصفية للموقع الجغرافي عند استيراد الصور. تحقق من إعدادات خصوصية Flickr/Picasa لتمكين استخدام الموقع الجغرافي للصور الذي يقوم التطبيق الخارجي باستيراده واستخدامه. يمكن أن يلزم إعادة استيراد الصور الحالية داخل Flickr/Picasa الخاص بموقع EXIF الجغرافي ليتم استخدامه.<br /><br />فيما يتعلق بـ Facebook، يجب الانتقال لكل صورة والنقر فوق تحرير وتحديد الموقع.",
				leftPanelTab1: "لتحديد الموقع",
				leftPanelTab2: "تم تحديد الموقع",
				clickOrTap: "انقر فوق الخريطة لتحديد موقعها أو اضغط عليها",
				clearLoc: "مسح المواقع",
				clickDrop: "لا تقم بالاستيراد",
				footerImport: "استيراد",
				footerProgress: "الاستيراد قيد التقدم",
				footerSucceed: "نجحت عملية الاستيراد.جارِ التحميل...",
				loading: "تحميل",
				error: "فضل استيراد موقع الصور الجغرافي، تم تجاهل المواقع الجغرافية."
			},
			initPopup: {
				title: "مرحبًا في منشئ جولة الخريطة",
				prevBtn: "السابق",
				nextBtn: "التالي"
			},
			initPopupHome: {
				header1: "أين توجد الصور أو مقاطع الفيديو؟",
				header2: "ستساعد هذه المساعدة في بناء جولة الخريطة من الوسائط المخزنة على شبكة الإنترنت بالفعل أو سيتم استيرادها داخل حساب ArcGIS Online for Organizations.",
				title1: "تكون متصلة بشبكة الإنترنت بالفعل",
				title2: "احتاج تحميل الصور",
				hostedFSTooltip: "استخدم ArcGIS Online لاستضافة الصور (لا تدعم مقاطع الفيديو).",
				hostedFsNA: "تكون متاحة فقط لـ ArcGIS for Organizations Publisher ومستخدمي المسئول",
				footer1: "عند الإتمام، لا تنسى مشاركة جولة الخريطة مع الحضور خلال صفحة عنصر التطبيق.",
				footer3: "تحميل قالب CSV",
				footer4: "\"Save as\" كما لم يتم التنزيل",
				footer4bis: "استخدم الزر الأيمن و\"Save as\" إذا لم يتم تشغيل التنزيل",
				footer5: "تعلم المزيد",
				footerProgress: "الإنشاء قيد التقدم",
				footerSucceed: "نجحت عملية الإنشاء. جارِ التحميل..."
			},
			helpPopup: {
				title: "تعليمات",
				close: "إغلاق",
				tab1: {
					title: "مقدمة",
					div1: "يتم تصميم قالب جولة الخريطة لتقديم المعلومات الجغرافية حيث يوجد عنصر فوتوغرافي أو وسائط مقنع بالقصة التي تحكي عنها.",
					div2: "ينتج القالب تطبيق تفاعلي وجاهز للاستخدام يسمح بتقديم مجموعة صغيرة من الأماكن على الخريطة بتتابع تعداد رقمي حيث يمكن استعراضه من قبل المستخدمين. يتم تصميم القالب لاستخدامه في أي مستعرض ويب على أي جهاز، بما في ذلك الهواتف الذكية والأجهزة اللوحية. <br /><br />فيما يلي مثال على نوع التطبيق الذي تقوم بإنشائه:",
					div4: "<a href='http://storymaps.esri.com/stories/maptour-palmsprings' target='_blank'>جولة لخريطة ينابيع النخيل</a>.",
					div42: "لرؤية أمثلة على جولات الخريطة التي يقوم الآخرون بإنشائها، <a href='http://links.esri.com/storymaps/map_tour_gallery' target='_blank'>تفضل بزيارة المعرض</a> على<a href='http://storymaps.arcgis.com/' target='_blank'>موقع خرائط القصص على الويب</a>. يمكن اتباعنا على Twitter على <a href='https://twitter.com/EsriStoryMaps' target='_blank'>@EsriStoryMaps</a>.",
					div5: "نرغب في الاستماع إليك! سواء كان لديك سؤال، وترغب في طلب ميزة جديدة، أو تعتقد أنك وجدت خلل، يرجى زيارة <a href='http://links.esri.com/storymaps/forum' target='_blank'>منتدى مستخدمي خرائط القصة</a>."
				},
				tab2: {
					title: "البيانات",
					div1: "العنصر الأساسي الذي يجب أخذه في الاعتبار عند بناء جولة الخريطة هو اختيار مكان تخزين الصور. يمكن لجولة الخريطة استخدام الصور المخزنة على خدمات مشاركة الصور على أي خادم ويب أو كمرفقات في خدمة معلم.",
					div1a: "راجع الجزء الأخير من علامة التبويب للحصول على التفاصيل المتعلقة بتنسيقات الصور والفيديوهات المدعومة.",
					div2: "يمنحك المنشئ التفاعلي خيارين لمعالجة الصور في جولة الخريطة:",
					div3: "<ul><li>يمكن استخدام<b>الصور المتصلة بالفعل بشبكة الإنترنت</b>، مثل الصور المُخزنة في مواقع مشاركة الصور مثل Flicker أو الصور المُخزنة على مواقع الويب. سيتم إرجاع هذه الصور في جولة الخريطة بواسطة عناوين URL.</li><li>يمكن أيضًا <b>تحميل الصور من الكمبيوتر</b> مُباشرًة داخل جولة الويب. يتطلب خيار التحميل الحصول على حساب ArcGIS for Organizations حيث الحصول على امتيازات الناشر أو المسئول وذلك بسبب إنشاء خدمة المعالم المستضافة تلقائيًا حيث يتم تخزين الصور كمرفقات. </li></ul>",
					div4: "حالات الاستخدام الأساسية هي:",
					div4b: "<b>لم تتم استضافة الصور</b> بعد ولديك حساب على ArcGIS for Organizations: يعتبر استخدام خدمة المعالم المُستضافة هو افضل خيار لك. مثل خدمات مشاركة الصور العامة، سنقوم بتحسين الصور لإنشاء الصور وسيصبح لديك إمكانية الوصول إلى جميع إمكانات الإدارة وإدارة البيانات للنظام الأساسي ArcGIS.",
					div5: "<b>أنت ليس عضوًا في أي منظمة</b>: يجب عليك أولا تحميل الصور على موقع مشاركة الصور على الويب أو على خادم الويب. وسيساعدك المُنشئ في استخدام هذه الصور التي تستمر استضافتها على الموقع الأصلي.",
					div6: "<b>تريد إعادة استخدام خدمة المعالم الحالية</b>التي تقوم بتخزين الصور كمرفقات أو التي تقوم بإسناد الصور الخارجية: راجع المقطع المُفصل الموضح أدناه.",
					div7: "<b>أنت تستخدم إصدارًا سابقًا</b>من قالب جولة الخريطة ولديك بالفعل CSV الذي يقوم بإسناد الصور والصور المصغرة: ستصبح قادرًا على استيرادهم وتنقية البيانات. يدعم المنشئ ملفات CSV فقط التي تستخدم حقول خطوط الطول/دوائر العرض: يمكن متابعة ملفات CSV التي تعمد على العنوان لاستخدامها في خرائط الويب (راجع المقطع الموضح أدناه).",
					div8: "الاستيراد من خدمات مشاركة الصورة المتصلة بشبكة الإنترنت",
					div9: "تقوم عملية الاستيراد بإسناد الصور التي تستضيفها عناوين URL بالفعل في مجموعة معالم خريطة الويب. الصور غير مخزنة في ArcGIS Online. إذا تعذر الوصول إلى الصور المستضافة، فلن تصبح متاحة في جولة الخريطة وسترى صورة \"الصورة غير متاحة\". استنادًا إلى موفر خدمة الصور، يتعذر على جولة الخريطة استيراد اسم الصور ووصفها وموقعها. تكون البيانات الجدولية الحالية مخزنة في خريطة الويب ولن يؤثر أي تحرير يتم القيام به في الخدمات المتصلة بشبكة الإنترنت على جولة الخريطة.",
					div10: "تخزين الصور على خادم الويب",
					div11: "إذا اخترت استضافة الصور بنفسك، سيتعين عليك إنشاء الصورة المصغرة للصور يدويًا. وسيتسبب استخدام الصور المصغرة فائقة الجودة في أداء ضعيف؛ لذا نوصي بشدة باستخدام خدمات مشاركة الصور المتصلة بشبكة الإنترنت أو خدمة معالم.",
					div12: "استخدام خدمة المعالم الحالية أو الملف الشكلي",
					div13: "يمكن استخدام أي من خدمة المعالم النقطية أو ملف شكل كمصدر بيانات جولة الخريطة. يتعين عليك إضافتها كطبقة داخل خريطة الويب من خلال عارض خرائط the arcgis.com. إذا عثر التطبيق على البيانات الجدولية المتوقعة في الطبقة، ستصبح جميع وظائف المنشئ متاحة.",
					div14: "تكون قيم الحقول المتوقعة (حساسة لحالة الأحرف):",
					div151: "الاسم",
					div152: "الوصف",
					div153: "الصورة",
					div154: "الصورة المصغرة",
					div155: "اللون ",
					div16: "إذا تعذّر على التطبيق العثور على الحقول المتطابقة عند استخدام خدمة المعالم، فلن يقوم العارض بدوره حتى تتمكن من تكوين الحقول ليتم استخدامها خلال المنشئ. يجب أن يكون لطبقات CSV وملفات الشكل المضافة إلى خريطة الويب جميع الحقول المطلوبة وإلا لن يقوم المنشئ بعمله.",
					div162: "عند استخدام خدمة معالم تقوم بتخزين الصور كمرفقات، <b>لا يتم استخدام إلا المعالم التي تحتوي على مرفقين</b>. يقوم المرفق الأول بتعريف الصورة الرئيسية، فيما يقوم المرفق الثاني بتعريف الصورة المصغرة.",
					div17: "تكون الصورة وحقول الصورة المصغرة إلزاميان لخدمات المعالم بدون مرفقات واختيارية (لكن لا يوصى بها بشدة) لخدمات المعالم مع المرفقات. وفي حالة تمكين مرفقات الخدمة، سيسمح المُنشئ بتحميل الصور كمرفقات. أما إذا لم يكن كذلك سيمكنك فقط تحرير الصورة وعناوين URL للصورة المصغرة.",
					div172: "عند وجودهما، سيتم استخدام حقلي الصورة العادية والصورة المصغرة، ولن يتم الاستعلام عن مرفقات خدمة المعالم.",
					div173: "يمكن تنزل أمثلة على ملفات CSV وملفات الشكل من",
					div18: "إنشاء خدمات معالم مستضافة من CSV أو ملف الشكل",
					div19: "عند إنشاء خدمة معالم مستضافة من CSV أو ملف شكل، لا يتم تمكين المرفقات افتراضيًا. ولتمكينها، افتح صفحة تفاصيل خدمة المعالم وانقر فوق السهم الصغير على جزء الطبقة وسترى هذا الخيار. وستستمر جولة الخريطة في استخدام الصور والصور المصغرة التي قمت بإسنادها خلال البيانات الجدولية. وإذا رغبت اختياريًا في تحميل الصور كمرفقات لخدمة المعالم ستصبح قادرًا على القيام بذلك من خلال زرين على لوحة الصورة (\"تغيير الصورة\" و \"تغيير الصورة المصغرة\").",
					div20: "تنسيقات الصور ومقاطع الفيديو المدعومة",
					div21: "تنسيقات الصورة المدعومة هي: <b>.jpg و.jpeg و.png و.gif و.bmp</b>. إذا لم تنتهي الوسائط بأي امتداد من هذه الامتدادات، ستتعامل معه جولة الخريطة على أنه مقطع فيديو، باستثناء عند استخدام خدمة معالم (راجع الموضوع أدناه).",
					div22: "لا يشمل قالب جولة الخريطة مُشغل فيديو؛ لذا يتعين عليك استخدام مشغل الفيديو الخارجي الذي توفره خدمة استضافة الفيديو المفضلة (اعثر على خيار تضمين الفيديو وانسخ عنوان URL الذي يوجد في الكود المعطى). إذا أردت استضافة الفيديو بنفسك، يمكنك إنشاء صفحة HTML تحتوي على مشغل فيديو مثل <a href='http://www.videojs.com/'>Video.js</a>.",
					div23: "لا يوفر المنشئ التفاعلي حوارًا ليتضمن فيديو عند استخدام خدمات المعالم ذات المرفقات، إلا أنه يمكن القيام بذلك بتحرير البيانات خارج المنشئ التفاعلي. وفي عارض خرائط arcgis.com إذا قمت بتعديل حقول الصورة للإشارة إلى فيديو خارجي وإضافة معطى مكاني في نهاية عنوان URL (#isVideo)، يتم اعتبار الوسائط على أنها فيديو.",
					div24: "لاحظ أنه يجب توفر مرفقين بصورتين صالحتين أو لن يتم استخدام النقطة. ولا يمكن استخدام مقاطع الفيديو عند استخدام مرفقات خدمة المعالم دون حقلي الصورة العادية والصورة المصغرة."
				},
				tab3: {
					title: "تخصيص",
					div1: "يوفر المنشئ خيارات تخصيص متعددة يمكن الوصول إليها من خلال زر إعدادات أعلى اللوحة. إذا تعذر العثور على الخيار التي تريده، نوفر لك أيضًا إصدار قابل للتنزيل ويمكن نشره على خادم الويب وكذلك تحسينه لملائمة احتياجاتك.",
					div2: "نُوصي باستخدام الإصدار المُستضاف إلا إذا:",
					div3: "<li>لا يُوفر تخصيص واجهة المستخدم التي ترغب في الحصول عليها، مثل استخدام صورة الخلفية.</li><li>أنت تعمل كمُطور وترغب في تحسين التطبيق.</li>",
					div4: "يمكن تكوين الإصدار القابل للتنزيل من خلال خريطة الويب أو معرف تطبيق رسم الخرائط على الويب. تشمل حالات الاستخدام الرئيسي:",
					div41: "إنك تقوم بإنشاء جولة الخريطة باستخدام المنشئ التفاعلي في البيئة المستضافة وتكوين القالب باستخدام مُعرف تطبيق رسم الخرائط على الويب، ويتم تطبيق الإعدادات التي قمت بتعريفها بالمنشئ التفاعلي.",
					div42: "إنك تقوم بإنشاء خريطة الويب خارج المنشئ التفاعلي وتكوين القالب بمُعرف خريطة الويب، ويتعين عليك قراءة الوثائق لتعلم كيفية تكوين القالب.",
					div43: "لاحظ أن المنشئ التفاعلي يتوفر في الإصدارات التي يمكن تنزيلها، إلا أن بعض القيود الفنية في المستعرضات مثل Internet Explorer التي تسبق الإصدار 10.",
					div5: "لتنزيل أحدث إصدار للقالب ومعرفة المزيد حول استخدامه، قم بزيارة <a href='https://github.com/Esri/map-tour-storytelling-template-js' target='_blank'>صفحة مشروع GitHub</a>."
				},
				tab4: {
					title: "تلميحات",
					div0: "المستعرضات المدعومة",
					div0a: "يدعم IE8+ عارض جولة الخريطة، كما أن IE9+ يدعم المُنشئ التفاعلي، كما أننا نعمل على اختباره في كل المستعرضات الرئيسية بكل نشاط، إلا أننا نوصي باستخدام Chrome عند مواجهة بعض الصعوبات.",
					div0b: "إذا واجهتك بعض الصعاب، يرجى إبلاغنا، وفي خلال ذلك يتعين عليك تقليل التفاعل مع واجهة المُنشئ من خلال إنشاء جولة الخريطة باستخدام قالب CSV.",
					div1: "الصور",
					div2: "نوصي باستخدام التوجيه الأفقي عوضًا عن التوجيه. والصور بنسبة العرض والارتفاع 4:3 تناسب بشكل أفضل. ويمكن استخدام صور الاتجاه العمودي، لكن على الشاشات الصغيرة مثل iPad، يمكن إخفاء العديد من الصور بسبب تسميتها (يشغل النص مساحة أكبر عند عرضه في منطقة طويلة مقارنًة بمنطقة عريضة). وعلى الرغم من إمكانية استخدام الصور ذات الأحجام المختلفة والأشكال والتوجيهات في جولة الخريطة، نوصي باستخدام الصورة ذات نفس الحجم والشكل. وبهذه الطريقة، لا تعمل الصور ذات الأحجام المختلفة على تشتيت انتباه المستخدم عند اتباع الجولة.",
					div2a: "نوصي بالصور بحد أقصى للحجم 1000 بكسل عرض × 750 بكسل طول لجميع الصور الرئيسية و 140× 93 للصور المصغرة.",
					div3: "تنسيق نص التسمية باستخدام علامات HTML",
					div4: "يمكن أن يتضمن رأس الصفحة وعنوان/تسمية الصورة علامات HTML لتعريف التنسيق والروابط. على سبيل المثال، يُضيف هذا الكود رابطًا باللون الأصفر:",
					div4a: "اكتب عنوان فرعي جيد للجولة الخاصة بك",
					div4b: "خذ الوقت لكتابة عنوان فرعي مقنع للجولة الخاصة بك. يعتبر العنوان الفرعي وسيلة جيدة لجذب الناس إلى الجولة الخاصة بك، وتخبرهم ما سوف يكتشفون. إنه أيضًا مكان جيد لمعرفة جمهورك الولاية أو الدولة التي يقع فيها الجولة. فعلى سبيل المثال، لا تفترض أن الناس يعرفون أي من المدن تقع فيها الجولة الخاصة بك. يمكن أيضًا تنسيق التسمية التوضيحية الخاصة بك باستخدام علامات HTML، بما في ذلك الروابط. ومع ذلك لا تستغرق التسمية وقتًا طويلاً جدًا. في نافذة المستعرض الأصغر أو على iPad، فقد لا تكون مناسبة تمامًا ويتم قصها. إذا تعذر عليك كتابة عنوان فرعي جيد، اتركه فارغًا.",
					div5: "طبقات الدعم",
					div6: "يُمكن إضافة طبقات دعم إضافية لتقديم سياق لجولة الخريطة، وقد تحتوي هذه الطبقات على معالم جغرافية أخرى ترغب في أن تعرضها الخريطة إضافة إلى نقاط جولة الخريطة، مثل منطقة الدراسة ومسار القيادة أو السير المرتبط بنقاط الجولة، إلى ما ذلك. ويعرض قالب جولة الخريطة طبقات الدعم الإضافية الحالية باستخدام الرموز التي تحددها في خريطة الويب، إلا أن العناصر المنبثقة غير متوفرة.",
					div7: "اجعل جولتك قصيرة ولطيفة",
					div8: "يوجد 99 نقطة فقط لكل جولة. بالطبع تكون أغلب جولات الخريطة أقصر من ذلك. لا تتوقع أن يتخطى الحضور العديد من نقاط الجولة. يمكن أن تجد الموضوع شيقًا ولكن لا تعتقد أنهم سيحبونه أيضًا!",
					div9: "لتتعلم المزيد، راجع<a href='https://github.com/Esri/map-tour-storytelling-template-js/raw/master/Readme.pdf' target='_blank'>الدليل المفصل</a>.",
					div10: "تضمين الوضع",
					div11: "إذا أردت تضمين القالب في موقع ويب آخر من خلال iframe، يقوم إضافة المعطى الاختياري \"&embed\" في نهاية عنوان URL بإزالة العنوان. ويمكن تعيين هذا الوضع أيضًا في الإصدار القابل للتحميل من خلال ملف التكوين.",
					div12: "تجنب استخدام عرض iFrame الضيق الذي يؤدي جولة الخريطة للتبديل إلى تخطيط مستند إلى اللمس التي تستجيب لها الشاشة الصغيرة. لتحقيق أقصى قدر من سهولة الاستخدام. عندما تقوم بتضمين جولة الخريطة، نوصي دائمًا بتوفير ارتباط بجوار الجولة المضمنة حتى يمكن للمستخدمين تشغيل شاشة الجولة بالكامل." 
				},
				tab5: {
					title: "النشر",
					div1: "عند الانتهاء، لا تنسى مشاركة جولة الخريطة مع الحضور من خلال زر \"المشاركة\" أو صفحة عنصر التطبيق في ArcGIS Online.",
					div2a: "مشاركة الجولة من خلال المنشئ",
					div2b: "سوف يعمل زر \"المشاركة\" على تحديث التطبيق وعناصر خريطة الويب. إذا تم تخزين بيانات الجولة في عنصر خدمة المعلم، فسيتم أيضًا تحديثها. وإذا قمت بإضافة طبقات أخرى من خلال عارض خرائط ArcGIS.com، فلن يتم تحديثهم. وهذا يمكن أن ينتج في الجولة التي لا يتم مشاركتها كما أنت متوقع. ولن يتم تحديث العناصر التي لديها الامتيازات المطلوبة (أو أكثر) بالفعل.",
					div2c: "مشاركة الجولة من خلال ArcGIS Online",
					div2d: "عند مشاركة التطبيق من خلال ArcGIS Online، فإنه سيطلب منك إذا لزم الأمر تحديث أي موارد مستقلة (خريطة ويب، خدمة معلم، طبقة زينة) التي لم يتم مشاركتها بنفس الطريقة. إذا كانت جولة الخريطة معروضة بشكل عام ولم يتم مشاركة أحد الموارد مع الحضور، فسوف يتم إعادة توجيه المستخدمين إلى صفحة تسجيل دخول ArcGIS Online.",
					div3t: "أمان خدمة المعلم",
					div3a: "في حالة استخدام خدمة المعالم المستضافة التي يقوم مُنشئ جولة الخريطة بإنشائها، يقوم التطبيق بإدارة أمان الخدمة وستظل الشخص الوحيد الذي يملك امتيازات التحرير حتى أثناء مشاركة الخدمة مع الجميع.",
					div3t2: "قبل مشاركة الجولة مع الحضور",
					div3: "تأكد من أن الجولة تعمل بشكل جيد عند عدم تسجيل دخولك مع حساب ArcGIS.com. ينبغي ألا يتم إعادة توجيه عنوان URL الذي تستخدمه إلى صفحة تسجيل الدخول أو إلى وضع المنشئ.",
					div4: "إنها لفكرة جيدة لرؤية شكل جولة الخريطة على جهاز iPad المحمول في وضع أفقي للتأكد من أنه يبدوا جيد على هذا الجهاز الواسع الانتشار. يُمكن أن يساعد ذلك في حالة قيام التسميات التوضيحية بتغطية العديد من الصور. إنه أيضًا يتيح لك رؤية إذا كان العنوان الفرعي مناسب وليس طويل جدًا وبالتالي يمكن قطعه.",
					div5a: "توصية للبحث",
					div5b: "لمساعدة الناس في العثور على جولة الخريطة إذا قاموا بالبحث في ArcGIS Online، فإننا نوصي بإضافة العلامة \"خريطة القصة\" في صفحة عنصر التطبيق الخاص بجولة الخريطة (ليس صفحة عنصر خريطة الويب)، بالإضافة إلى علامات مثل اسم الولاية أو المقاطعة حيث توجد فيها الجولة، واسم الدولة إذا كانت خارج الولايات المتحدة الأمريكية، وعلامات موضوعية مثل \"فن عام\"، \"دليل السائح\"، أو \"الأماكن التاريخية\". تساعدك هذه العلامات في Esri للعثور على أمثلة لجولات جديدة شيقة يمكننا عرضها في المعارض والترويج في الوسائط الاجتماعية. إننا أيضًا نوصي بتحميل صورة جرافيك مصغرة تبدوا جيدة في صفحة عنصر التطبيق، مثل لقطة شاشة صغيرة من الجولة أو إحدى الصور منها. وتستخدم هذه الصورة تلقائيًا إذا تم إضافة جولة الخريطة في معرض ArcGIS Online."
				}
			},
			share: {
				firstSaveTitle: "تم حفظ الجولة بنجاح",
				firstSaveHeader: "يتم الأن حفظ الجولة الخاصة بك في ArcGIS Online. الرجاء قراءة الإجابات التالية على الأسئلة المتكررة.",
				firstSaveA1: "إذا لم تكن متألف مع ArcGIS Online أو ترغب في الحصول على الاختصار للوصول إلى واجهة التأليف، يمكن حفظ الرابط التالي: %LINK1%",
				firstSaveA1bis: "يمكن أيضًا العثور على الجولة في <a href='%LINK2%' target='_blank'>مجلد محتوى ArcGIS Online</a>.",
				firstSaveQ2: "هل تمت مشاركة الجولة؟",
				firstSaveA2: "لم يتم مشاركة الجولة حاليًا. لمشاركتها، استخدم زر \"المشاركة\".",
				shareTitle: "مشاركة الجولة",
				sharePrivateHeader: "لم تتم مشاركة الجولة، هل ترغب في مشاركتها؟",
				sharePrivateBtn1: "مشاركتها بشكل عام",
				sharePrivateBtn2: "مشاركتها مع المنظمة",
				sharePrivateProgress: "المشاركة قيد التقدم...",
				sharePrivateErr: "فشلت المشاركة، أعد المحاولة مرة أخرى أو",
				sharePrivateOk: "تم تحديث المشاركة بنجاح، جارِ التحميل...",
				sharePreviewAsUser: "معاينة",
				shareHeader1: "يمكن الوصول إلى الجولة <strong>بشكل عام</strong>.",
				shareHeader2: "يمكن الوصول إلى الجولة من قبل أعضاء المنظمة (يتطلب تسجيل الدخول).",
				shareLinkHeader: "مشاركة الجولة مع الحضور",
				shareLinkOpen: "فتح",
				shareQ1Opt1: "كيف يمكنني جعل الجولة خاصة؟",
				shareQ1Opt2: "كيف أحتفظ بجعل الجولة خاصة أو مشاركتها علنًا؟",
				shareA1: "استخدم %SHAREIMG% على <a href='%LINK1%' target='_blank'>صفحة عنصر التطبيق</a>. إذا كنت ترغب أيضًا في عدم مشاركة خريطة الويب، استخدم <a href='%LINK2%' target='_blank'>صفحة عنصر خريطة الويب</a>.",
				shareA1bis: "إذا كنت ترغب أيضًا في عدم مشاركة خدمة المعلم، استخدم <a href='%LINK1%' target='_blank'>صفحة عنصر خدمة المعلم</a>.",
				shareQ2: "كيف أقوم بتحرير الجولة لاحقًا؟",
				shareQ2bis: "كيف يمكنني الحصول على العودة إلى واجهة التأليف؟",
				shareA2div1: "احفظ الرابط التالي وقم بإعادة استخدامه %LINK1% أو استخدم <a href='%LINK2%' target='_blank'>صفحة عنصر التطبيق</a>.",
				shareA2div2: "بصفتك مالك التطبيق، عند تسجيل الدخول على ArcGIS.com، سيتضمن التطبيق زر لفتح المنشئ التفاعلي:",				
				shareQ3: "أين يتم تخزين البيانات؟",
				shareA3: "يتم تخزين تكوين الجولة في <a href='%LINK1%' target='_blank'>عنصر خريطة الويب</a> و <a href='%LINK2%' target='_blank'>عنصر تطيق الويب</a>. يتم إرجاع صور Flicker وPicasa وFacebook ومقاطع فيديو YouTube في المواقع الخاصة ولن يتم تكرارها في ArcGIS Online.",
				shareWarning: "تم تعطيل مشاركة %WITH% وذلك لأنك ليس مالك <a href='%LINK%' target='_blank'>خريطة الويب</a>.",
				shareWarningWith1: "علانية",
				shareWarningWith2: "علانية ومع المنظمة"
			}
        }
    })
);
