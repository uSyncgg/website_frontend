// import React, { useEffect, useState } from 'react';
import { CCardSubtitle, CListGroup, CListGroupItem } from '@coreui/react'
// import axios from 'axios';
// import check from '../../../website_images/games/check-under-image.png';
// import snd_league from '../../../website_images/games/cod/cod-leagues/snd-league.png';
// // import './Cod.css';
// import './CodTourney.css';
// // import styles from './CodTourney.module.css';
// import EventTime from '../EventTime';
// import CheckboxDropdown from './components/CodCheckboxDropdown';
// import { string } from 'prop-types';
import Footer from '../../../Footer';

// function CodTourneys() {
//     const [tournaments, setTournaments] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const cardsPerPage = 10;

//     const [navHeight, setNavHeight] = React.useState(60); // Default to 60px
    
//         React.useEffect(() => {
//             const navbar = document.querySelector('.navbar'); // Adjust based on your class
//             if (navbar) {
//                 setNavHeight(navbar.offsetHeight);
//             }
//         }, []);

//     useEffect(() => {
//         axios.get("https://website-backend-5m32.onrender.com/usyncapp/tournaments").then(res => {
//             setTournaments(res.data)
//         }).catch(err => {
//             console.log(err)
//         });
//     }, []);

//     // Get current tournaments
//     const indexOfLastTournament = currentPage * cardsPerPage;
//     const indexOfFirstTournament = indexOfLastTournament - cardsPerPage;
//     const currentTournaments = tournaments.slice(indexOfFirstTournament, indexOfLastTournament);
    
//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const nextPage = () => setCurrentPage(prev => prev < Math.ceil(tournaments.length / cardsPerPage) ? prev + 1 : prev);
//     const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

//     const [selectedFormats, setSelectedFormats] = useState([]);
//     const [selectedRegions, setSelectedRegions] = useState([]);
//     const [selectedPlatforms, setSelectedPlatforms] = useState([]);
//     const [selectedSkills, setSelectedSkills] = useState([]);
//     const [selectedEntry, setSelectedEntry] = useState([]);
    
//     // Available filter options
//     const teamOptions = ['1v1', '2v2', '3v3', '4v4']; 
//     const regionOptions = ['NA', 'EU', 'LATAM', 'USA'];
//     const consoleOptions = ['Console']
//     const skillOptions = ['Novice', 'Amateur', 'Expert', 'Agent', 'Master', 'Challenger']
//     const entryOptions = ['Free', 'ECO']

//     const handleFormatChange = (selectedOptions) => {
//         setSelectedFormats(selectedOptions);
//     };
    
//     // Handle region filter changes
//     const handleRegionChange = (selectedOptions) => {
//         setSelectedRegions(selectedOptions);
//     };

//     // Handle region filter changes
//     const handlePlatformChange = (selectedOptions) => {
//         setSelectedPlatforms(selectedOptions);
//     };

//     // Handle region filter changes
//     const handleSkillChange = (selectedOptions) => {
//         setSelectedSkills(selectedOptions);
//     };

//     // Handle region filter changes
//     const handleEntryChange = (selectedOptions) => {
//         setSelectedEntry(selectedOptions);
//     };

//     // const filteredTournaments = tournaments.filter(tournament => {
//     //     const formatMatch = selectedFormats.length === 0 ||
//     //         (tournament['1v1'] && selectedFormats.includes('1v1')) ||
//     //         (tournament['2v2'] && selectedFormats.includes('2v2')) ||
//     //         (tournament['3v3'] && selectedFormats.includes('3v3')) ||
//     //         (tournament['4v4'] && selectedFormats.includes('4v4'))

//     //     // const regionMatch = selectedRegions.length === 0 ||
//     //     //     (tournament.region)

//     //     return formatMatch
//     // })

//     // console.log("CURRENT TOURNAMENTS:", JSON.stringify(currentTournaments, null, 2));
//     // console.log(`SELECTED FORMAT: ${selectedFormats}`)
//     // console.log(`FORMATTED MATCH: ${JSON.stringify(filteredTournaments)}`)
//     // console.log(filteredTournaments.length)
//     // console.log(tournaments.length)
//     console.log(`selected skill ${selectedSkills}`)
//     return (
//         <div>
//             <div className="tourney-background">
//                 <div className="d-flex">
//                     <div className="sidebar" style={{ width: '50%', padding: '2rem', marginLeft: '5rem', position: 'relative' }}>
//                         <div className='filter-box'>
//                             <h1 style={{ position: 'relative', zIndex: 2, marginTop: '3rem', color: 'white' }}>Filters</h1>

//                             {/* <CCard style={{ height: '10%' }}>
//                                 <CCardBody>
//                                     <CCardTitle>Tournament Filters</CCardTitle>
//                                     <CCardText>
//                                         <p>Filter by region, entry fee, etc.</p>

//                                         <label>
//                                             <input type="checkbox" name='Free Entry'/> Free Entry
//                                         </label>
//                                     </CCardText>
//                                 </CCardBody>
//                             </CCard>
//                         </div> */}

//                         {/* <div className="filters-container d-flex gap-3 mb-4"> */}
//                             <div className="tourney-borders">
//                                 <CheckboxDropdown 
//                                 title="Team Size" 
//                                 options={teamOptions} 
//                                 onChange={handleFormatChange}
//                                 selectedOptions={selectedFormats}
//                                 />

//                                 <CheckboxDropdown 
//                                 title="Regions" 
//                                 options={regionOptions}
//                                 onChange={handleRegionChange}
//                                 selectedOptions={selectedRegions} 
//                                 />
                                
//                                 <CheckboxDropdown 
//                                 title="Platform" 
//                                 options={consoleOptions}
//                                 onChange={handlePlatformChange}
//                                 selectedOptions={selectedPlatforms} 
//                                 />

//                                 <CheckboxDropdown 
//                                 title="Skill" 
//                                 options={skillOptions}
//                                 onChange={handleSkillChange}
//                                 selectedOptions={selectedSkills} 
//                                 />

//                                 <CheckboxDropdown 
//                                 title="Entry Fee" 
//                                 options={entryOptions}
//                                 onChange={handleEntryChange}
//                                 selectedOptions={selectedEntry} 
//                                 />
//                             </div>
//                         </div>
//                     </div>
                    
//                     {/* Right side tournament list */}
//                     <div style={{ width: '70%', padding: '2rem' }}>
//                         <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//                             <h1 style={{ position: 'relative', zIndex: 2, marginTop: '4rem', color: 'white' }}>Featured</h1>
//                             <h1 style={{ position: 'relative', zIndex: 2, marginTop: '4rem', color: "rgb(142,106,206)", marginLeft: '0.5rem' }}>Tournaments</h1>
//                         </div>
//                         {/* {currentTournaments.map((tournament) => {
//                             selectedFormats === "all" || tournament[selectedFormats]
//                             return <TournamentList tournaments={currentTournaments} />
//                         })} */}
//                         {/* <TournamentList tournaments={currentTournaments} /> */}

//                         <TournamentList 
//                             tournaments={currentTournaments}
//                             format={selectedFormats}
//                             region={selectedRegions}
//                             platform={selectedPlatforms}
//                             skill={selectedSkills}
//                             entry={selectedEntry} 
//                         />
//                     </div>
//                 </div>
                        
//                 {/* Pagination Controls */}
//                 <div className="d-flex justify-content-center mt-4 white-text page-buttons">
//                     <CButton 
//                         onClick={prevPage} 
//                         disabled={currentPage === 1}
//                         className="mx-2 white-text"
//                     >
//                         &larr; Previous
//                     </CButton>
//                     <div className="d-flex align-items-center">
//                         Page {currentPage} of {Math.ceil(tournaments.length / cardsPerPage)}
//                     </div>
//                     <CButton 
//                         onClick={nextPage} 
//                         disabled={currentPage === Math.ceil(tournaments.length / cardsPerPage)}
//                         className="mx-2 white-text"
//                     >
//                         Next &rarr;
//                     </CButton>
//                 </div>
//             </div>
//         <Footer />
//     </div>
//     );
// }

// // function CodTourneys() {
// //     const [tournaments, setTournaments] = useState([]);

// //     useEffect(() => {
// //         axios.get("http://localhost:5000/usyncapp/tournaments").then(res => {
// //             setTournaments(res.data)
// //         }).catch(err => {
// //             console.log(err)
// //         });
// //     }, []);

// //     return (
// //         <div>
// //             <h1>Tournaments</h1>
// //             <div>
// //                 <TournamentList tournaments={tournaments} />
                
// //                 {/* <div className="container d-flex justify-content-md-start" style={{ paddingRight: '30%' }}>
// //                    <p>Hello</p> 
// //                 </div> */}
// //                 {/* PUT TOURNEY SORTER HERE ^ Right idea*/}
// //             </div>
// //         </div>
// //     );
// // }

import React, { useEffect, useState } from 'react';
import { CButton, CCard, CCardBody, CCardText, CCardTitle, CContainer, CRow, CCol } from '@coreui/react';
import axios from 'axios';
import CheckboxDropdown from './components/CodCheckboxDropdown';
// import TournamentList from './TournamentList';
import './CodTourney.css';

// export default CodTourneys;

function CodTourneys() {
    const [tournaments, setTournaments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10;

    useEffect(() => {
        axios.get("https://website-backend-5m32.onrender.com/usyncapp/tournaments")
            .then(res => setTournaments(res.data))
            .catch(err => console.log(err));
    }, []);

    const [selectedFormats, setSelectedFormats] = useState([]);
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState([]);

    const teamOptions = ['1v1', '2v2', '3v3', '4v4']; 
    const regionOptions = ['NA', 'EU', 'LATAM', 'United States'];
    const consoleOptions = ['PC', 'Console'];
    const skillOptions = ['Novice', 'Amateur', 'Expert', 'Agent', 'Master', 'Challenger'];
    const entryOptions = ['Free Entry', 'ECO'];

    // const handleFilterChange = (setter) => (selectedOptions) => setter(selectedOptions);

    const handleFilterChange = (setter, currentValues) => (selectedOptions) => {
        // If selectedOptions is an array, ensure deselected options are removed
        if (Array.isArray(selectedOptions)) {
            setter(selectedOptions);
        } else {
            // If it's a single value toggle (boolean), remove if unchecked
            const updatedValues = currentValues.includes(selectedOptions)
                ? currentValues.filter(item => item !== selectedOptions) // Remove if unchecked
                : [...currentValues, selectedOptions]; // Add if checked
    
            setter(updatedValues);
        }
    };    

    const filteredTournaments = tournaments.filter(tournament => {
        // if (selectedEntry[0] == 'ECO' && !selectedEntry.includes('Free Entry')) {
        //     selectedEntry.push('Free Entry')
        //     selectedEntry.push('$1')
        //     selectedEntry.push('1 credit')
        // }

        // if (selectedPlatforms[0] == 'Console Only' && !selectedPlatforms.includes('console only')) {
        //     selectedPlatforms.push('console only')
        // }
        
        // if (selectedSkills.includes('Novice') && !selectedSkills.includes('Nov')) {
        //     selectedSkills.push('Nov')
        // }

        // if (selectedSkills.includes('Amateur') && !selectedSkills.includes('Am')) {
        //     selectedSkills.push('Am')
        // }

        const formatMatch = selectedFormats.length === 0 || selectedFormats.some(format => tournament[format]);
        const regionMatch = selectedRegions.length === 0 || selectedRegions.some(region => tournament.region.includes(region));
        const platformMatch = selectedPlatforms.length === 0 || selectedPlatforms.includes(tournament.platform);
        const skillMatch = selectedSkills.length === 0 || selectedSkills.some(skill => tournament.skill.includes(skill));
        const entryMatch = selectedEntry.length === 0 || selectedEntry.includes(tournament.entry);

        return formatMatch && regionMatch && platformMatch && skillMatch && entryMatch;
    });
    
    const indexOfLastTournament = currentPage * cardsPerPage;
    const indexOfFirstTournament = indexOfLastTournament - cardsPerPage;
    const currentTournaments = filteredTournaments.slice(indexOfFirstTournament, indexOfLastTournament);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage(prev => prev < Math.ceil(filteredTournaments.length / cardsPerPage) ? prev + 1 : prev);
    const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev);

    return (
        <div>
            <div className="tourney-background">
                <div className='d-flex'>
                    <div className="sidebar" style={{ width: '50%', padding: '2rem', marginLeft: '5rem', position: 'relative' }}>
                        <div className='filter-box'>
                            <h1 style={{ position: 'relative', zIndex: 2, marginTop: '3rem', color: 'white' }}>Filters</h1>
                            <div className="tourney-borders">
                                <CheckboxDropdown title="Team Size" options={teamOptions} onChange={handleFilterChange(setSelectedFormats, selectedFormats)} selectedOptions={selectedFormats} />
                                <CheckboxDropdown title="Regions" options={regionOptions} onChange={handleFilterChange(setSelectedRegions, selectedRegions)} selectedOptions={selectedRegions} />
                                <CheckboxDropdown title="Platform" options={consoleOptions} onChange={handleFilterChange(setSelectedPlatforms, selectedPlatforms)} selectedOptions={selectedPlatforms} />
                                <CheckboxDropdown title="Skill" options={skillOptions} onChange={handleFilterChange(setSelectedSkills, selectedSkills)} selectedOptions={selectedSkills} />
                                <CheckboxDropdown title="Entry Fee" options={entryOptions} onChange={handleFilterChange(setSelectedEntry, selectedEntry)} selectedOptions={selectedEntry} />
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '70%', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <h1 style={{ position: 'relative', zIndex: 2, marginTop: '4rem', color: 'white' }}>Featured</h1>
                            <h1 style={{ position: 'relative', zIndex: 2, marginTop: '4rem', color: "rgb(142,106,206)", marginLeft: '0.5rem' }}>Tournaments</h1>
                        </div>

                        <TournamentList 
                            tournaments={currentTournaments}
                        />
                    </div>
                </div>
            
                <div className="d-flex justify-content-center mt-4 white-text page-buttons">
                    <CButton 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                        className="mx-2 white-text"
                    >
                        &larr; Previous
                    </CButton>
                    <div className="d-flex align-items-center">
                        Page {currentPage} of {Math.ceil(filteredTournaments.length ? filteredTournaments.length >= 1 : 1 / cardsPerPage)}
                    </div>
                    <CButton 
                        onClick={nextPage} 
                        disabled={currentPage === Math.ceil(filteredTournaments.length ? filteredTournaments.length >= 1 : 1 / cardsPerPage)}
                        className="mx-2 white-text"
                    >
                        Next &rarr;
                    </CButton>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function TournamentList({tournaments, format, region, platform, skill, entry}) {
    var is1v1, is2v2, is3v3, is4v4, isEco, isNov, isAm, isExp, isAgent, isMaster, isChall
    var isNa, isEu, isLatam, isUSA
    var selectedFormats = []
    var selectedEntry = []
    var selectedPlatforms = []
    var selectedRegions = []
    var selectedSkills = []
    // const { tournaments } = props;
    // console.log(`FORMAT: ${format}`)
    // console.log(`'FORMAT TYPE: ${typeof format}`)
    // console.log(platform)
    // console.log(skill)
    // console.log(entry)
    // console.log(region)


    if (Array.isArray(platform)) {
        platform = platform === 'Console' ? selectedPlatforms.push('console_only') : ''
    } else { platform = '' }

    if (Array.isArray(format)) {
        is1v1 = format.includes('1v1') ? selectedFormats.push('1v1') : ''
        is2v2 = format.includes('2v2') ? selectedFormats.push('2v2') : ''
        is3v3 = format.includes('3v3') ? selectedFormats.push('3v3') : ''
        is4v4 = format.includes('4v4') ? selectedFormats.push('4v4') : ''
    } else {
        is1v1 = ''
        is2v2 = ''
        is3v3 = ''
        is4v4 = ''
    }

    if (Array.isArray(region)) {
        isNa = region.includes('NA') ? selectedRegions.push('isNa') : ''
        isEu = region.includes('EU') ? selectedRegions.push('isEu') : ''
        isLatam = region.includes('LATAM') ? selectedRegions.push('isLatam'): ''
        isUSA = region.includes('USA') | region.includes('United States') ? selectedRegions.push('isUSA'): ''
    } else {
        isNa = ''
        isEu = ''
        isLatam = ''
        isUSA = ''
    }
    
    if (Array.isArray(entry)) {
        isEco = entry.includes('ECO') ? selectedEntry.push('iseco') : ''
    } else { isEco = '' }

    if (Array.isArray(skill)) {
        isNov = skill.includes('Novice') ? selectedSkills.push('novice') : ''
        isAm = skill.includes('Amateur') ? selectedSkills.push('amateur') : ''
        isExp = skill.includes('Expert') ? selectedSkills.push('expert') : ''
        isAgent = skill.includes('Agent') ? selectedSkills.push('agent') : ''
        isMaster = skill.includes('Master') ? selectedSkills.push('master') : ''
        isChall = skill.includes('Challenger') ? selectedSkills.push('challenger') : ''
    } else {
        isNov = ''
        isAm = ''
        isExp = ''
        isAgent = ''
        isMaster = ''
        isChall = ''
    }

    // console.log(selectedFormats)
    // console.log(selectedSkills)
    // console.log(`TOURNAMENTS: ${tournaments}`)
    return (
        <div>
            {tournaments
            .filter(tournament => {
                var formatMatch = selectedFormats.length === 0 || selectedFormats.some(format => tournament[format] === true);
                var formatPlatform = selectedPlatforms.length === 0 || selectedPlatforms.some(platform => tournament[platform] === true);
                var formatSkill = selectedSkills.length === 0 || selectedSkills.some(skill => tournament[skill] === true);
                var formatEntry = selectedEntry.length === 0 || selectedEntry.some(entry => tournament[entry] === true);
                var formatRegion = selectedRegions.length === 0 || selectedRegions.some(region => tournament[region] === true);

                return formatMatch && formatPlatform && formatSkill && formatEntry && formatRegion
            })

            .map(tournament => (
                <Tournament key={tournament._id} tournament={tournament} />
            ))}
        </div>
    );
}

function Tournament(props) {
    const { tournament } = props;

    const hosterBanners = {
        'cmg': 'https://i.imgur.com/M4FR1qC.png',
        'codagent': 'https://i.imgur.com/R12yczc.png'
    }

    // const iseco = tournament.iseco;
    // const is1v1 = tournament['1v1']
    // const is2v2 = tournament['2v2']
    // const is3v3 = tournament['3v3']
    // const is4v4 = tournament['4v4']
    // const isconsole = tournament.console_only
    // const isnov = tournament.novice
    // const isam = tournament.amateur
    // const isexp = tournament.expert
    // const isagent = tournament.agent
    // const ismaster = tournament.master
    // const ischallenger = tournament.challenger
    // var hoster = tournament.company

    var tournament_class = tournament.company

    // if (iseco === true) { tournament_class += 'eco ' }
    // if (is1v1 === true) { tournament_class += '1v1 ' }
    // if (is2v2 === true) { tournament_class += '2v2 ' }
    // if (is3v3 === true) { tournament_class += '3v3 ' }
    // if (is4v4 === true) { tournament_class += '4v4 ' }
    // if (isconsole === true) { tournament_class += 'console '}
    // if (isnov === true) { tournament_class += 'novice ' }
    // if (isam === true) { tournament_class += 'amateur ' }
    // if (isexp === true) { tournament_class += 'expert ' }
    // if (isagent === true) { tournament_class += 'agent ' }
    // if (ismaster === true) { tournament_class += 'master ' }
    // if (ischallenger === true) { tournament_class += 'challenger ' }
    // if (hoster === 'cmg') {tournament_class += 'cmg'}
    // if (hoster === 'codagent') {tournament_class += 'codagent'}

    return (
        

        <div className={"container-fluid d-flex justify-content-md-start"} style={{ paddingLeft: '12.5%', height: '60%' }}>
            <CCard style={{ marginRight: '5rem' }} className={'mb-4 tournament-card-wrapper'}>
                <CCardBody className='py-3'>
                    <CRow>
                        {/* Left side: Title and subtitle - Now vertically centered */}
                        <CCol xs={12} md={4} lg={3} className="mb-3 mb-md-0 d-flex flex-column justify-content-center">
                            {/* <img src={hosterBanners[tournament.company]} alt={tournament.company} className='hoster-banner'/> */}
                            <CCardTitle className='white-text'>{tournament.gamemode.toUpperCase()}</CCardTitle>
                            <CCardSubtitle className='mb-0 purple-text'>{tournament.team_size}</CCardSubtitle>
                            <CCardSubtitle className='mb-0 purple-text'>{tournament.series}</CCardSubtitle>
                        </CCol>
                        
                        {/* Right side: Information in CListGroups */}
                        <CCol xs={12} md={8} lg={6}>
                            <CContainer fluid className="p-0">
                            <CRow>
                                <CRow>
                                    <CCol xs={12} sm={6} md={4} lg={6} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2 white-text'>Time</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2 purple-text'>{tournament.time} EST</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={6} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2 white-text'>Entry</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2 purple-text'>{tournament.entry}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>
                                </CRow>

                                <CRow>
                                    <CCol xs={12} sm={6} md={4} lg={4} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2 white-text'>Region</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2 purple-text'>{tournament.region}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={3} className="mb-0">
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2 white-text'>Skill</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2 purple-text'>{tournament.skill}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>

                                    <CCol xs={12} sm={6} md={4} lg={5}className="mb-0" >
                                    <CListGroup flush className="border-0">
                                        <CListGroupItem className='py-1 px-2 white-text'>Restrictions</CListGroupItem>
                                        <CListGroupItem className='py-1 px-2 purple-text'>{tournament.requirements}</CListGroupItem>
                                    </CListGroup>
                                    </CCol>
                                </CRow>
                            </CRow>
                            </CContainer>
                        </CCol>

                        {/* Right side: Join Now - Now vertically centered */}
                        <CCol xs={12} md={4} lg={3} className="mb-3 mb-md-0 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-primary white-text purple-color" onClick={() => window.open(tournament.url, '_blank')}>Join Now</button>
                        </CCol>
                    </CRow>
                    {/* <CCardTitle>{tournament.gamemode.toUpperCase()}</CCardTitle>
                    <CCardSubtitle>CHANGE TEAM SIZE TO TEAM_SIZE IN DB</CCardSubtitle>
                    <CCardSubtitle>{tournament.series}</CCardSubtitle>
                    <CContainer>
                        

                        
                    </CContainer>

                    <CCardText>
                        WILL WANT TO FIX DATE TO BE ALL 1 FORMAT IN DB SO PULLING TO SITE IS A SEAMLESS PROCESS<br/>
                        {tournament.date}<br/>
                    </CCardText> */}
                </CCardBody>
            </CCard>
        </div>
    );
}

export default CodTourneys;

