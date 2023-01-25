'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questionanswers', [
      {
        question: 'What is the supreme law of the land?',
        answer: ['the Constitution'],
        type: ['1'],
        wrongAns: ['Declaration of Independence', 'Bill of Rights', 'Star Spangled Banner'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What does the Constitution do?',
        answer: ['Sets up the government', 'Defines the government', 'Protects basic rights of Americans'],
        type: ['1'],
        wrongAns: ['Declared Indepence', 'Elected the first president of the US', 'Declared Washington D.C. as the capital'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        answer: ['We the People'],
        type: ['1'],
        wrongAns: ['I pledge allegiance', 'Star Spangled Banner', 'United States of America'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is an amendment?',
        answer: ['A change (to the Constitution)', 'An addition (to the Constitution)'],
        type: ['1'],
        wrongAns: ['Adding a state to the US', 'Adding a Senator to the Senate', 'Agreement between the political parties'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What do we call the first ten amendments to the Constitution?',
        answer: ['The Bill of Rights'],
        type: ['1'],
        wrongAns: ['Declaration of Indepedence', 'Federalist Papers', 'Checks and Balances'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one right or freedom from the First Amendment?',
        answer: ['Speech', 'Religion', 'Assembly', 'Press', 'Petition the government'],
        type: ['1'],
        wrongAns: ['Play sports', 'Pursuit of Happiness', 'Education'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many amendments does the Constitution have?',
        answer: ['Twenty-Seven (27)'],
        type: ['1'],
        wrongAns: ['Eighteen (18)', 'Thirty (30)', 'Twenty-Five (25)'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did the Declaration of Independence do?',
        answer: ['Announced our independence (from Great Britain)', 'Declared our independence (from Great Britain)', 'Said that the United States is free (from Great Britain)'],
        type: ['1'],
        wrongAns: ['Freed the slaves', 'Defined the government', 'Chose the first president'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two rights in the Declaration of Independence?',
        answer: ['Life', 'Liberty', 'Pursuit of happiness'],
        type: ['2'],
        wrongAns: ['Citizenship', 'Civil Rights', 'Freedom'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is freedom of religion?',
        answer: ['You can practice any religion, or not practice a religion.'],
        type: ['1'],
        wrongAns: ['You are not allowed to practice a religion', 'You can only practice certain religions', 'You can pledge allegiance to any flag'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the economic system in the United States?',
        answer: ['Capitalist economy', 'Market economy'],
        type: ['1'],
        wrongAns: ['Communism', 'Checks and Balances', 'Democracy'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the “rule of law”?',
        answer: ['Everyone must follow the law.', 'Leaders must obey the law.', 'Government must obey the law.', 'No one is above the law.'],
        type: ['1'],
        wrongAns: ['Freedom of Religion', 'Must register for Selective Service at age 18', 'Freedom of Speech'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one branch or part of the government.',
        answer: ['Congress', 'Legislative', 'President', 'Executive', 'The Courts', 'Judicial'],
        type: ['1'],
        wrongAns: ['Newspapers', 'Democrats', 'Republicans'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What stops one branch of government from becoming too powerful?',
        answer: ['Checks and balances', 'Seperation of powers'],
        wrongAns: ['Freedom of Speech', 'The Senate and House of Representatives', 'The Supreme Court'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is in charge of the executive branch?',
        answer: ['The President'],
        type: ['1'],
        wrongAns: ['The Supreme Court', 'Vice President', 'Secretary of State'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who makes federal laws?',
        answer: ['Congress', 'Senate and House of Representatives', '(U.S. or national) Legislature'],
        type: ['1'],
        wrongAns: ['President', 'Secretary of Laws', 'The Supreme Court'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are the two parts of the U.S. Congress?',
        answer: ['The Senate and House of Representatives'],
        type: ['1'],
        wrongAns: ['The Senate and Supreme Court', 'House of Representatives and Supreme Court', 'President and Supreme Court'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many U.S. Senators are there?',
        answer: ['One hundred (100)'],
        type: ['1'],
        wrongAns: ['Fifty (50)', 'Two hundred (200)', 'Twenty five (25)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a U.S. Senator for how many years? ',
        answer: ['Six (6)'],
        type: ['1'],
        wrongAns: ['Two (2)', 'Four (4)', 'Ten (10)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Who is one of your state's U.S. Senators now?",
        answer: ['Answer will vary.'],
        type: ['1'],
        wrongAns: ['Joe Biden', 'John Roberts', 'Nancy Pelosi'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The House of Representatives has how many voting members? ',
        answer: ['Four hundred thirty-five (435)'],
        type: ['1'],
        wrongAns: ['Four hundred (400)', 'Fifty (50)', 'Four hundred fifty (450)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a U.S. Representative for how many years?',
        answer: ['Two (2)'],
        type: ['1'],
        wrongAns: ['Four (4)', 'Eight (8)', 'Ten (10)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name your U.S. Representative.',
        answer: ['Answer will vary.'],
        type: ['1'],
        wrongAns: ['Joe Biden', 'John Roberts', 'Nancy Pelosi'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who does a U.S. Senator represent?',
        answer: ['All people of the state'],
        type: ['1'],
        wrongAns: ['The President', 'All the people of a country', 'Some people of a city'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why do some states have more Representatives than other states?',
        answer: ["(Because of) The state's population", "(Because) They have more people", "(Because) Some states have more people"],
        type: ['1'],
        wrongAns: ['(Because) The state has been around longer', '(Because) Some states have more money', '(Because) Some states have more land'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a President for how many years?',
        answer: ['Four (4)'],
        type: ['1'],
        wrongAns: ['Eight (8)', 'Two (2)', 'Ten (10)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'In what month do we vote for President?',
        answer: ['November'],
        type: ['1'],
        wrongAns: ['August', 'January', 'April'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the President of the United States now?',
        answer: ['Joe Biden'],
        type: ['1'],
        wrongAns: ['Donald Trump', 'George W. Bush', 'Nancy Pelosi'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the Vice President of the United States now?',
        answer: ['Kamala Harris'],
        type: ['1'],
        wrongAns: ['Michael Pence', 'Nancy Pelosi', 'Kevin Mccarthy'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'If the President can no longer serve, who becomes President?',
        answer: ['The Vice President'],
        type: ['1'],
        wrongAns: ['First Lady of the US', 'Speaker of the House', 'one of the Senators from Florida'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'If both the President and the Vice President can no longer serve, who becomes President?',
        answer: ['The Speaker of The House'],
        type: ['1'],
        wrongAns: ['Attorney General', 'Secretary of Homeland Security', 'First Lady of the US'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Commander in Chief of the military?',
        answer: ['The President'],
        type: ['1'],
        wrongAns: ['The Vice-President', 'Secretary of Homeland Security', 'Attorney General'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who signs bills to become laws?',
        answer: ['The President'],
        type: ['1'],
        wrongAns: ['The Vice-President', 'Speaker of the House', 'First Lady of the US'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who vetoes bills?',
        answer: ['The President'],
        type: ['1'],
        wrongAns: ['The Vice-President', 'Senators', 'Secratary of Education'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What does the President's Cabinet do?",
        answer: ['Advises the President'],
        type: ['1'],
        wrongAns: ['Vetoes Bills', 'Elects the president', 'Writes amendments'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two Cabinet-level positions?',
        answer: ['Secretary of Agriculture', 'Secretary of Commerce', 'Secretary of Defense', 'Secretary of Education', 'Secretary of Energy', 'Secretary of Health and Human Services', 'Secretary of Homeland Security', 'Secretary of Housing and Urban Development', 'Secretary of the Interior', 'Secretary of Labor', 'Secretary of State', 'Secretary of Transportation', 'Secretary of the Treasury', 'Secretary of Veteran Affairs', 'Attorney General', 'Vice President'],
        type: ['2'],
        wrongAns: ['Secretary of Technology', 'Secretary of Nature', 'Secretary of Happiness'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What does the judicial branch do?',
        answer: ['Reviews laws', 'Explains laws', 'Resolves disputes (disagreements)', 'Decides if a law goes against the Constitution'],
        type: ['1'],
        wrongAns: ['Vetoes Laws', 'Writes Laws', 'Negotiates treaties'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the highest court in the United States?',
        answer: ['The Supreme Court'],
        type: ['1'],
        wrongAns: ['U.S. Courts of Appeals', 'U.S. District Courts', 'Tax Court'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many justices are on the Supreme Court?',
        answer: ['Nine (9)'],
        type: ['1'],
        wrongAns: ['Twelve (12)', 'Seven (7)', 'Ten (10)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Chief Justice of the United States now?',
        answer: ['John Roberts'],
        type: ['1'],
        wrongAns: ['Sonia Sotomayor', 'Clarence Thomas', 'Brett Kavanaugh'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
        answer: ['To print money', 'To declare war', 'To create an army', 'To make treaties'],
        type: ['1'],
        wrongAns: ['To provide police protection', 'To apporve zoning and land use', "To give a driver's license"],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Under our Constitution, some powers belong to the states. What is one power of the states? ',
        answer: ['Provide schooling and education', 'Provide protection (Police)', 'Provide safety (Fire Departments)', "Give a driver's license", 'Approve zoning and land use'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Governor of your state now?',
        answer: ['Answer will vary'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the capital of your state?',
        answer: ['Answer will vary'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are the two major political parties in the United States?',
        answer: ['Democratic and Republican'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the political party of the President now?',
        answer: ['Democrat'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the Speaker of the House of Representatives now?',
        answer: ['Nancy Pelosi'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'There are four amendments to the Constitution about who can vote. Describe one of them.',
        answer: ['Citizens eighteen (18) and older (can vote).', "You don't have to pay (a poll tax) to vote.", 'Any citizen can vote. (Women and men can vote.)', 'A male citizen of any race (can vote).'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one responsibility that is only for United States citizens?',
        answer: ['Serve on a jury', 'Vote in a federal election'],
        wrongAns: [''],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one right only for United States citizens.',
        answer: ['Vote in a federal election', 'Run for federal office'],
        type: ['1'],
        wrongAns: ['Freedom of Religion', 'Join a political party', 'Freedom of Speech'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two rights of everyone living in the United States?',
        answer: ['Freedom of Expression', 'Freedom of Speech', 'Freedom of Assembly', 'Freedom to Petition the Government', 'Freedom of Religion', 'The Right to Bear Arms',],
        type: ['2'],
        wrongAns: ['Right to serve on a jury', 'Freedom to run for federal office', 'Right to vote without poll taxes'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What do we show loyalty to when we say the Pledge of Allegiance?',
        answer: ['The United States', 'The Flag'],
        type: ['1'],
        wrongAns: ['Party of the president', 'Statue of Liberty', 'National Anthem'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one promise you make when you become a United States citizen?',
        answer: ['Give up loyalty to other countries', 'Defend the Constitution and laws of the United States', 'Obey the laws of the United States', 'Serve in the U.S. military (if needed)', 'Serve (do important work for) the nation (if needed)', 'Be loyal to the United States'],
        type: ['1'],
        wrongAns: ['Never leave the US', 'Pay taxes for traveling to other countries', 'Learn English'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How old do citizens have to be to vote for President?',
        answer: ['18 and older'],
        type: ['1'],
        wrongAns: ['Under 18 years', '16 and older', '30 and older'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two ways that Americans can participate in their democracy?',
        answer: ['Vote', 'Join a political party', 'Help with a campaign', 'Join a civic group', 'Join a community group', 'Give an elected official your opinion on an issue', 'Call Senators and Representatives', 'Publicly support or oppose an issue or policy', 'Run for office', 'Write to a newspaper'],
        type: ['2'],
        wrongAns: ['Apply for a job', 'Purchase real estate', 'Buy a car'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When is the last day you can send in federal income tax forms?',
        answer: ['April 15'],
        type: ['1'],
        wrongAns: ['February 14', 'April 1', 'May 5'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When must all men register for the Selective Service?',
        answer: ['At age 18'],
        type: ['1'],
        wrongAns: ['At age 21', 'At age 15', 'At age 30'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one reason colonists came to America?',
        answer: ['Freedom', 'Political Liberty', 'Religious Freedom', 'Economic Opportunity', 'Practice their Religion', 'Escape Persecution'],
        type: ['1'],
        wrongAns: [''],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who lived in America before the Europeans arrived?',
        answer: ['American Indians', 'Native Americans'],
        type: ['1'],
        wrongAns: ['Africans', 'Russians', 'Asians'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What group of people was taken to America and sold as slaves?',
        answer: ['Africans', 'People from Africa'],
        type: ['1'],
        wrongAns: ['Native Indians', 'Europeans', 'Asians'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why did the colonists fight the British?',
        answer: ['Because of high taxes (taxation without representation)', 'Because the British army stayed in their houses (boarding, quartering)', "Because they didn't have self-government"],
        type: ['1'],
        wrongAns: ['To end slavery', 'For power over The Louisiana Territory', 'For free Tea'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who wrote the Declaration of Independence?',
        answer: ['Thomas Jefferson'],
        type: ['1'],
        wrongAns: ['John Adams', 'Abraham Lincoln', 'George Washington'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When was the Declaration of Independence adopted?',
        answer: ['July 4, 1776'],
        type: ['1'],
        wrongAns: ['June 8, 1776', 'August 1, 1789', 'April 1, 1767'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'There were 13 original states. Name three.',
        answer: ['New Hampshire', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey', 'Pennsylvania', 'Delaware', 'Maryland', 'Virginia', 'North Carolina', 'South Carolina', 'Georgia'],
        type: ['3'],
        wrongAns: ['Tennessee', 'Alabama', 'Kentucky'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What happened at the Constitutional Convention?',
        answer: ['The Constitution was written.', 'The Founding Fathers wrote the Constitution'],
        type: ['1'],
        wrongAns: ['The slaves were freed', 'George Washington was elected', 'The National Anthem was written'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When was the Constitution written?',
        answer: ['1787'],
        type: ['1'],
        wrongAns: ['1750', '1812', '1830'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
        answer: ['James Madison', 'Alexander Hamilton', 'John Jay', 'Publius'],
        type: ['1'],
        wrongAns: ['George Washington', 'John Adams', 'Abraham Lincoln'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one thing Benjamin Franklin is famous for?',
        answer: ['U.S. diplomat', 'Oldest member of the Constitutional Convention', 'First Postmaster General of the United States', `Writer of “Poor Richard's Almanac”`, 'Started the first free libraries'],
        type: ['1'],
        wrongAns: ['President of the United States', 'Freed the slaves', 'Gave women the right to vote'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the “Father of Our Country”?',
        answer: ['Abraham Lincoln', 'Benjamin Franklin', 'John Adams'],
        type: ['1'],
        wrongAns: ['Abraha'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was the first President?',
        answer: ['George Washington'],
        type: ['1'],
        wrongAns: ['Abraham Lincoln', 'Andrew Jackson', 'John Adams'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What territory did the United States buy from France in 1803?',
        answer: ['The Louisiana Territory', 'Louisiana'],
        type: ['1'],
        wrongAns: ['Alaskan Territory', 'New Mexico Territory', 'Canada'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one war fought by the United States in the 1800s.',
        answer: ['War of 1812', 'Mexican-American War', 'Civil War', 'Spanish-American War'],
        type: ['1'],
        wrongAns: ['World War 2', 'Revolutionary War', 'Korean War'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name the U.S. war between the North and the South. ',
        answer: ['The Civil War'],
        type: ['1'],
        wrongAns: ['Korean War', 'Revolutionary War', 'War of 1812'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one problem that led to the Civil War.',
        answer: ['Slavery', 'Economic Reasons', "State's Rights"],
        type: ['1'],
        wrongAns: ['Communism', 'Freedom of Religion', 'Free libraries'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What was one important thing that Abraham Lincoln did?',
        answer: ['Freed the slaves (Emancipation Proclamation)', 'Saved (or preserved) the Union', 'Led the United States during the Civil War'],
        type: ['1'],
        wrongAns: ['Founded the United States', 'Was the first president', 'Led the United States during World War 2'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did the Emancipation Proclamation do?',
        answer: ['Freed the slaves', 'Freed slaves in the Confederacy', 'Freed slaves in the Confederate states', 'Freed slaves in most Southern states'],
        type: ['1'],
        wrongAns: ['Gave women the right to vote', 'Declared War', 'Gave indepedence to the US'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did Susan B. Anthony do?',
        answer: ["Fought for women's rights", 'Fought for civil rights'],
        type: ['1'],
        wrongAns: ['Fought for the end of slavery', 'Became president of the United States', "Fought against the Nazi's"],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one war fought by the United States in the 1900s.',
        answer: ['World War 1', 'World War 2', 'Korean War', 'Vietnam War', '(Persian) Gulf War'],
        type: ['1'],
        wrongAns: ['War of 1812', 'American Revolutionary War', 'Civil War'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was President during World War I?',
        answer: ['Woodrow Wilson'],
        type: ['1'],
        wrongAns: ['Theodore Roosevelt', 'Rutherford B. Hayes', 'Andrew Johnson'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was President during the Great Depression and World War II?',
        answer: ['Franklin Roosevelt'],
        type: ['1'],
        wrongAns: ['Abraham Lincoln', 'Andrew Jackson', 'John F. Kennedy'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who did the United States fight in World War II?',
        answer: ['Japan, Germany and Italy'],
        type: ['1'],
        wrongAns: ['Canada, England and Ireland', 'Morocco, Egypt and Saudi Arabia', 'Russia, Sweden and Austria'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Before he was President, Eisenhower was a general. What war was he in?',
        answer: ['World War 2'],
        type: ['1'],
        wrongAns: ['World War 1', 'Korean War', 'Vietnam War'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'During the Cold War, what was the main concern of the United States?',
        answer: ['Communism'],
        type: ['1'],
        wrongAns: ['Influenza', 'Fascism', 'Capitalism'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What movement tried to end racial discrimination?',
        answer: ['Civil Rights Movement'],
        type: ['1'],
        wrongAns: ['Industrial Revolution', 'Civil War'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did Martin Luther King, Jr. do?',
        answer: ['Fought for civil rights', 'Worked for equality for all Americans'],
        type: ['1'],
        wrongAns: ['Became President of the United States', 'Freed the slaves', 'Set up the government'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What major event happened on September 11, 2001, in the United States?',
        answer: ['Terrorists attacked the United States'],
        type: ['1'],
        wrongAns: ['Martin Luther King Jr., led the civil rights movement', 'George Bush was Elected', 'World War 2 started'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one American Indian tribe in the United States.',
        answer: ['Cherokee', 'Navajo', 'Sioux', 'Apache', 'Seminole'],
        type: ['1'],
        wrongAns: ['Maya', 'Inca', 'Zapotec'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one of the two longest rivers in the United States.',
        answer: ['Missouri River', 'Mississippi River'],
        type: ['1'],
        wrongAns: ['Amazon River', 'Tennessee River', 'Yukon River'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What ocean is on the West Coast of the United States?',
        answer: ['Pacific Ocean'],
        type: ['1'],
        wrongAns: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What ocean is on the East Coast of the United States?',
        answer: ['Atlantic Ocean'],
        type: ['1'],
        wrongAns: ['Pacific Ocean', 'Indian Ocean', 'Arctic Ocean'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one U.S. territory.',
        answer: ['Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'],
        type: ['1'],
        wrongAns: ['Cuba', 'Iceland', 'Haiti'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one state that borders Canada.',
        answer: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'],
        type: ['1'],
        wrongAns: ['Wyoming', 'Kentucky', 'North Carolina'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one state that borders Mexico.',
        answer: ['California', 'Arizona', 'New Mexico', 'Texas'],
        type: ['1'],
        wrongAns: ['Florida', 'Georgia', 'Kansas'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the capital of the United States?',
        answer: ['Washington D.C.'],
        type: ['1'],
        wrongAns: ['New York City', 'Chicago', 'Baltimore'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Where is the Statue of Liberty?',
        answer: ['New York Harbor', 'Liberty Island'],
        type: ['1'],
        wrongAns: ['Staten Island', 'Washington DC', 'Chicago'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why does the flag have 13 stripes?',
        answer: ['Because there were 13 original colonies', 'Because the stripes represent the original colonies'],
        type: ['1'],
        wrongAns: ['Because there have been 13 Presidents', 'Because there were 13 founding fathers', 'Because there are 13 amendments'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why does the flag have 50 stars?',
        answer: ['Because there is one star for each state', 'Because each star represents a state', 'Because there are 50 states'],
        type: ['1'],
        wrongAns: ['Because there are 50 senators', 'Because there are 50 original colonies', 'Because there are 50 Presidents'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the national anthem?',
        answer: ['The Star-Spangled Banner'],
        type: ['1'],
        wrongAns: ['America The Beautiful', 'God Bless The USA', 'Yankee Doodle'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When do we celebrate Independence Day?',
        answer: ['July 4'],
        type: ['1'],
        wrongAns: ['December 31', 'March 5', 'April 1'],
        category: 'Integrated Civics',
        subcategory: 'Holidays',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name two national U.S. holidays.',
        answer: ["New Year's Day", "Martin Luther King, Jr. Day", "Presidents' Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"],
        type: ['2'],
        wrongAns: ['Easter', "Valentine's Day", 'Groundhog Day'],
        category: 'Integrated Civics',
        subcategory: 'Holidays',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      




    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questionanswers', null, {});
  }
};
