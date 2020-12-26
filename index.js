console.log('This is the console of CV Scrolar');

// here data is the array of objects which contains data about various profiles. 
const data = [{
        name: 'Kuldip Chawla',
        age: 28,
        city: 'Kolkata',
        language: 'python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg'
    },
    {
        name: 'Ashwin Tiwari',
        age: 22,
        city: 'Nmagpur',
        language: 'Go',
        framework: 'viewJs',
        image: 'https://randomuser.me/api/portraits/thumb/men/78.jpg'
    }, {
        name: 'Swastika Paul',
        age: 26,
        city: 'Bhubaneswar',
        language: 'JavaScript',
        framework: 'ReactJs',
        image: 'https://randomuser.me/api/portraits/thumb/women/28.jpg'
    }, {
        name: 'Sandip Jha',
        age: 24,
        city: 'Noida',
        language: 'java',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/thumb/men/25.jpg'
    }, {
        name: 'Ananya Das',
        age: 31,
        city: 'Ranchi',
        language: 'C++',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/thumb/women/14.jpg'
    }
]

// CV iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}

// Button Listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data);
nextCV();

function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item active" aria-current="true">${currentCandidate.name}</li>
                                <li class="list-group-item">${currentCandidate.age} years old</li>
                                <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                                <li class="list-group-item">Language:<b> ${currentCandidate.language}</b></li>
                                <li class="list-group-item">FrameWork:<b> ${currentCandidate.framework}</b></li>
                            </ul>`;
    } else {
        alert('End of Candidate Applications');
        window.location.reload();
    }

}