'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questionanswers', [
      {
        question: 'What is the supreme law of the land?',
        answer: ['the Constitution'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What does the Constitution do?',
        answer: ['Sets up the government', 'Defines the government', 'Protects basic rights of Americans'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
        answer: ['We the People'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is an amendment?',
        answer: ['A change (to the Constitution)', 'An addition (to the Constitution)'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What do we call the first ten amendments to the Constitution?',
        answer: ['The Bill of Rights'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one right or freedom from the First Amendment?',
        answer: ['Speech', 'Religion', 'Assembly', 'Press', 'Petition the government'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many amendments does the Constitution have?',
        answer: ['Twenty-Seven (27)'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did the Declaration of Independence do?',
        answer: ['Announced our independence (from Great Britain)', 'Declared our independence (from Great Britain)', 'Said that the United States is free (from Great Britain)'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two rights in the Declaration of Independence?',
        answer: ['Life', 'Liberty', 'Pursuit of happiness'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is freedom of religion?',
        answer: ['You can practice any religion, or not practice a religion.'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the economic system in the United States?',
        answer: ['Capitalist economy', 'Market economy'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the “rule of law”?',
        answer: ['Everyone must follow the law.', 'Leaders must obey the law.', 'Government must obey the law.', 'No one is above the law.'],
        category: 'American Government',
        subcategory: 'Principles of American Democracy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one branch or part of the government.*',
        answer: ['Congress', 'Legislative', 'President', 'Executive', 'The Courts', 'Judicial'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What stops one branch of government from becoming too powerful?',
        answer: ['Checks and balances', 'Seperation of powers'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is in charge of the executive branch?',
        answer: ['The President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who makes federal laws?',
        answer: ['Congress', 'Senate and House of Representatives', '(U.S. or national) Legislature'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are the two parts of the U.S. Congress?',
        answer: ['The Senate and House of Representatives'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many U.S. Senators are there?',
        answer: ['One Hundred (100)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a U.S. Senator for how many years? ',
        answer: ['Six (6)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Who is one of your state’s U.S. Senators now?",
        answer: ['Answer will vary.'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The House of Representatives has how many voting members? ',
        answer: ['Four hundred thirty-five (435)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a U.S. Representative for how many years?',
        answer: ['two (2)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name your U.S. Representative.',
        answer: ['Answer will vary.'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who does a U.S. Senator represent?',
        answer: ['All people of the state'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why do some states have more Representatives than other states?',
        answer: ["(because of) The state’s population", "(because) They have more people", "(Because) some states have more people"],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'We elect a President for how many years?',
        answer: ['Four (4)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'In what month do we vote for President?*',
        answer: ['November'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the President of the United States now?*',
        answer: ['Joe Biden'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the Vice President of the United States now?',
        answer: ['Kamala Harris'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'If the President can no longer serve, who becomes President?',
        answer: ['The Vice President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'If both the President and the Vice President can no longer serve, who becomes President?',
        answer: ['The Speaker of The House'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Commander in Chief of the military?',
        answer: ['The President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who signs bills to become laws?',
        answer: ['The President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who signs bills to become laws?',
        answer: ['The President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who vetoes bills?',
        answer: ['The President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What does the President’s Cabinet do?",
        answer: ['Advises the President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two Cabinet-level positions?',
        answer: ['Secretary of Agriculture', 'Secretary of Commerce', 'Secretary of Defense', 'Secretary of Education', 'Secretary of Energy', 'Secretary of Health and Human Services', 'Secretary of Homeland Security', 'Secretary of Housing and Urban Development', 'Secretary of the Interior', 'Secretary of Labor', 'Secretary of State', 'Secretary of Transportation', 'Secretary of the Treasury', 'Secretary of Veteran Affairs', 'Attorney General', 'Vice President'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What does the judicial branch do?',
        answer: ['Reviews laws', 'Explains laws', 'Resolves disputes (disagreements)', 'Decides if a law goes against the Constitution'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the highest court in the United States?',
        answer: ['The Supreme Court'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many justices are on the Supreme Court?',
        answer: ['Nine (9)'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Chief Justice of the United States now?',
        answer: ['John Roberts'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
        answer: ['To print money', 'To declare war', 'To create an army', 'To make treaties'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Under our Constitution, some powers belong to the states. What is one power of the states? ',
        answer: ['Provide schooling and education', 'Provide protection (Police)', 'Provide safety (Fire Departments)', "Give a driver’s license", 'Approve zoning and land use'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the Governor of your state now?',
        answer: ['Answer will vary'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the capital of your state?*',
        answer: ['Answer will vary'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are the two major political parties in the United States?*',
        answer: ['Democratic and Republican'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the political party of the President now?',
        answer: ['Democrat'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the Speaker of the House of Representatives now?',
        answer: ['Nancy Pelosi'],
        category: 'American Government',
        subcategory: 'System of Government',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'There are four amendments to the Constitution about who can vote. Describe one of them.',
        answer: ['Citizens eighteen (18) and older (can vote).', 'You don’t have to pay (a poll tax) to vote.', 'Any citizen can vote. (Women and men can vote.)', 'A male citizen of any race (can vote).'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one responsibility that is only for United States citizens?*',
        answer: ['Serve on a jury', 'Vote in a federal election'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one right only for United States citizens.',
        answer: ['Vote in a federal election', 'Run for federal office'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two rights of everyone living in the United States?',
        answer: ['Freedom of Expression', 'Freedom of Speech', 'Freedom of Assembly', 'Freedom to Petition the Government', 'Freedom of Religion', 'The Right to Bear Arms',],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What do we show loyalty to when we say the Pledge of Allegiance?',
        answer: ['The United States', 'The Flag'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one promise you make when you become a United States citizen?',
        answer: ['Give up loyalty to other countries', 'Defend the Constitution and laws of the United States', 'Obey the laws of the United States', 'Serve in the U.S. military (if needed)', 'Serve (do important work for) the nation (if needed)', 'Be loyal to the United States'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How old do citizens have to be to vote for President?*',
        answer: ['Eighteen (18) and older'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What are two ways that Americans can participate in their democracy?',
        answer: ['Vote', 'Join a political party', 'Help with a campaign', 'Join a civic group', 'Join a community group', 'Give an elected official your opinion on an issue', 'Call Senators and Representatives', 'Publicly support or oppose an issue or policy', 'Run for office', 'Write to a newspaper'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When is the last day you can send in federal income tax forms?*',
        answer: ['April 15'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When must all men register for the Selective Service?',
        answer: ['At age eighteen (18)', 'Between eighteen (18) and twenty-six (26)'],
        category: 'American Government',
        subcategory: 'Rights and Responsibilities',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one reason colonists came to America?',
        answer: ['Freedom', 'Political Liberty', 'Religious Freedom', 'Economic Opportunity', 'Practice their Religion', 'Escape Persecution'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who lived in America before the Europeans arrived?',
        answer: ['American Indians', 'Native Americans'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What group of people was taken to America and sold as slaves?',
        answer: ['Africans', 'People from Africa'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why did the colonists fight the British?',
        answer: ['Because of high taxes (taxation without representation)', 'Because the British army stayed in their houses (boarding, quartering)', "Because they didn’t have self-government"],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who wrote the Declaration of Independence?',
        answer: ['Thomas Jefferson'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When was the Declaration of Independence adopted?',
        answer: ['July 4, 1776'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'There were 13 original states. Name three.',
        answer: ['New Hampshire', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey', 'Pennsylvania', 'Delaware', 'Maryland', 'Virginia', 'North Carolina', 'South Carolina', 'Georgia'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What happened at the Constitutional Convention?',
        answer: ['The Constitution was written.', 'The Founding Fathers wrote the Constitution'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When was the Constitution written?',
        answer: ['1787'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
        answer: ['James Madison', 'Alexander Hamilton', 'John Jay', 'Publius'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is one thing Benjamin Franklin is famous for?',
        answer: ['U.S. diplomat', 'Oldest member of the Constitutional Convention', 'First Postmaster General of the United States', `Writer of “Poor Richard’s Almanac”`, 'Started the first free libraries'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who is the “Father of Our Country”?',
        answer: ['George Washington'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was the first President?',
        answer: ['George Washington'],
        category: 'American History',
        subcategory: 'Colonial Period and Independence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What territory did the United States buy from France in 1803?',
        answer: ['The Louisiana Territory', 'Louisiana'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one war fought by the United States in the 1800s.',
        answer: ['War of 1812', 'Mexican-American War', 'Civil War', 'Spanish-American War'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name the U.S. war between the North and the South. ',
        answer: ['The Civil War', 'The War between the States'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one problem that led to the Civil War.',
        answer: ['Slavery', 'Economic Reasons', "State's Rights"],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What was one important thing that Abraham Lincoln did?*',
        answer: ['Freed the slaves (Emancipation Proclamation)', 'Saved (or preserved) the Union', 'Led the United States during the Civil War'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did the Emancipation Proclamation do?',
        answer: ['Freed the slaves', 'Freed slaves in the Confederacy', 'Freed slaves in the Confederate states', 'Freed slaves in most Southern states'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did Susan B. Anthony do?',
        answer: ["Fought for women's rights", 'Fought for civil rights'],
        category: 'American History',
        subcategory: "1800's",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one war fought by the United States in the 1900s.',
        answer: ['World War 1', 'World War 2', 'Korean War', 'Vietnam War', '(Persian) Gulf War'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was President during World War I?',
        answer: ['Woodrow Wilson'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who was President during the Great Depression and World War II?',
        answer: ['Franklin Roosevelt'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Who did the United States fight in World War II?',
        answer: ['Japan, Germany and Italy'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Before he was President, Eisenhower was a general. What war was he in?',
        answer: ['World War 2'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'During the Cold War, what was the main concern of the United States?',
        answer: ['Communism'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What movement tried to end racial discrimination?',
        answer: ['Civil Rights Movement'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What did Martin Luther King, Jr. do?',
        answer: ['Fought for civil rights', 'Worked for equality for all Americans'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What major event happened on September 11, 2001, in the United States?',
        answer: ['Terrorists attacked the United States'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one American Indian tribe in the United States.',
        answer: ['Cherokee', 'Navajo', 'Sioux', 'Apache', 'Seminole'],
        category: 'American History',
        subcategory: 'Recent American History and Other Important Historical Information',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one of the two longest rivers in the United States.',
        answer: ['Missouri River', 'Mississippi River'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What ocean is on the West Coast of the United States?',
        answer: ['Pacific Ocean'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What ocean is on the East Coast of the United States?',
        answer: ['Atlantic Ocean'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one U.S. territory.',
        answer: ['Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one state that borders Canada.',
        answer: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name one state that borders Mexico.',
        answer: ['California', 'Arizona', 'New Mexico', 'Texas'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the capital of the United States?',
        answer: ['Washington D.C.'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Where is the Statue of Liberty?',
        answer: ['New York Harbor', 'Liberty Island'],
        category: 'Integrated Civics',
        subcategory: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why does the flag have 13 stripes?',
        answer: ['Because there were 13 original colonies', 'Because the stripes represent the original colonies'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Why does the flag have 50 stars?',
        answer: ['Because there is one star for each state', 'Because each star represents a state', 'Because there are 50 states'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'What is the name of the national anthem?',
        answer: ['The Star-Spangled Banner'],
        category: 'Integrated Civics',
        subcategory: 'Symbols',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'When do we celebrate Independence Day?',
        answer: ['July 4'],
        category: 'Integrated Civics',
        subcategory: 'Holidays',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Name two national U.S. holidays.',
        answer: ["New Year's Day", "Martin Luther King, Jr. Day", "Presidents' Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"],
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
