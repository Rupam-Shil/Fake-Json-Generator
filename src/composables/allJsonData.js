export const allCards = [
	{
		icon: 'fa-home',
		name: 'address',
		checkboxdata: [
			{ value: 'address.zipCode', name: 'Zip-Code' },
			{ value: 'address.city', name: 'City' },
			{ value: 'address.streetName', name: 'Street' },
			{ value: 'address.streetAddress', name: 'Address' },
			{ value: 'address.country', name: 'Country' },
			{ value: 'address.state', name: 'State' },
			{ value: 'address.nearbyGPSCoordinate', name: 'Gps Coordinates' },
			{ value: 'address.timeZone', name: 'Time Zone' },
		],
	},
	{
		icon: 'fa-paw',
		name: 'animal',
		checkboxdata: [
			{ value: 'animal.dog', name: 'Dog' },
			{ value: 'animal.cat', name: 'Cat' },
			{ value: 'animal.snake', name: 'Snake' },
			{ value: 'animal.bird', name: 'Bird' },
			{ value: 'animal.fish', name: 'Fish' },
			{ value: 'animal.insect', name: 'Insect' },
			{ value: 'animal.horse', name: 'Horse' },
			{ value: 'animal.type', name: 'Type' },
		],
	},
	{
		icon: 'fa-building',
		name: 'company',
		checkboxdata: [
			{ value: 'company.companyName', name: 'Company' },
			{ value: 'company.catchPhrase', name: 'Tagline' },
			{ value: 'company.bs', name: 'Headline' },
			{ value: 'company.bsAdjective', name: 'BS Adjective' },
			{ value: 'company.bsNoun', name: 'BS Noun' },
		],
	},
	{
		icon: 'fa-calendar-week',
		name: 'date',
		checkboxdata: [
			{ value: 'date.past', name: 'Past' },
			{ value: 'date.future', name: 'Future' },
			{ value: 'date.recent', name: 'Recent' },
			{ value: 'date.month', name: 'Month' },
			{ value: 'date.weekday', name: 'Day' },
		],
	},
	{
		icon: 'fa-money-check-alt',
		name: 'finance',
		checkboxdata: [
			{ value: 'finance.currencySymbol', name: 'Currency Symbol' },
			{ value: 'finance.currencyName', name: 'Currency Name' },
			{ value: 'finance.bitcoinAddress', name: 'Bitcoin Address' },
			{ value: 'finance.creditCardNumber', name: 'Credit Card No' },
			{ value: 'finance.creditCardCVV', name: 'CVV' },
			{ value: 'finance.accountName', name: 'Account Name' },
			{ value: 'finance.transactionDescription', name: 'Transaction' },
			{ value: 'finance.iban', name: 'I-Ban' },
		],
	},
	{
		icon: 'fa-cog',
		name: 'helpers',
		checkboxdata: [
			{
				value: 'helpers.replaceCreditCardSymbols',
				name: 'CC Symbol',
			},
			{ value: 'helpers.createCard', name: 'CC Symbol' },
			{ value: 'helpers.contextualCard', name: 'Context' },
			{ value: 'helpers.userCard', name: 'User Details' },
			{
				value: 'helpers.createTransaction',
				name: 'Transaction Details',
			},
		],
	},
	{
		icon: 'fa-image',
		name: 'image',
		checkboxdata: [
			{
				value: 'image.image',
				name: 'Image Link',
			},
			{ value: 'image.imageUrl', name: 'Direct Link' },
			{ value: 'image.animals', name: 'Animal Image' },
			{ value: 'image.food', name: 'Food Image' },
			{
				value: 'image.people',
				name: 'People Image',
			},
			{
				value: 'image.sports',
				name: 'Sports Image',
			},
			{
				value: 'image.fashion',
				name: 'Fashion Image',
			},
			{
				value: 'image.dataUri',
				name: 'Data URI',
			},
		],
	},
	{
		icon: 'fa-wifi',
		name: 'internet',
		checkboxdata: [
			{
				value: 'internet.email',
				name: 'Email',
			},
			{ value: 'internet.userName', name: 'Username' },
			{ value: 'internet.url', name: 'URL' },
			{ value: 'internet.ip', name: 'IP' },
			{
				value: 'internet.password',
				name: 'Password',
			},
			{
				value: 'internet.ipv6',
				name: 'IPV6',
			},
			{
				value: 'internet.domainNam',
				name: 'Domain Name',
			},
			{
				value: 'internet.color',
				name: 'Color',
			},
		],
	},
	{
		icon: 'fa-align-left',
		name: 'lorem',
		checkboxdata: [
			{
				value: 'lorem.word',
				name: 'Lorem Word',
			},
			{ value: 'lorem.sentence', name: 'Lorem Sentence' },
			{ value: 'lorem.slug', name: 'Slug' },
			{ value: 'lorem.paragraph', name: 'Small Paragraph' },
			{
				value: 'lorem.paragraphs',
				name: 'Big Paragraph',
			},
			{
				value: 'lorem.lines',
				name: 'Line',
			},
			{
				value: 'lorem.text',
				name: 'Text',
			},
		],
	},
	{
		icon: 'fa-user-circle',
		name: 'name',
		checkboxdata: [
			{
				value: 'name.findName',
				name: 'User Name',
			},
			{ value: 'name.gender', name: 'Gender' },
			{ value: 'name.prefix', name: 'Mr/Ms/Mrs' },
			{ value: 'name.title', name: 'Title' },
			{
				value: 'name.jobDescriptor',
				name: 'Work',
			},
			{
				value: 'name.jobArea',
				name: 'Job Area',
			},
			{
				value: 'name.jobType',
				name: 'Job Type',
			},
		],
	},
	{
		icon: 'fa-phone-alt',
		name: 'phone',
		checkboxdata: [
			{
				value: 'phone.phoneNumber',
				name: 'Ph Number',
			},
			{
				value: 'phone.phoneNumberFormat',
				name: 'Ph Formatted',
			},
			{
				value: 'phone.phoneFormats',
				name: 'Formatted',
			},
		],
	},
	{
		icon: 'fa-dice',
		name: 'random',
		checkboxdata: [
			{
				value: 'random.number',
				name: 'Random Number',
			},
			{ value: 'random.float', name: 'Random Float' },
			{ value: 'random.uuid', name: 'UUID' },
			{ value: 'random.boolean', name: 'Boolean' },
			{
				value: 'random.word',
				name: 'Word',
			},
			{
				value: 'random.alphaNumeric',
				name: 'Alphabet Number',
			},
			{
				value: 'random.hexaDecimal',
				name: 'Hexadecimal',
			},
		],
	},
];
