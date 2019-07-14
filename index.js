console.log("before");

// getUser(1)
//     .then(user=>getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err=>console.log(err.message))

async function displayCommits(){
    try{
        const user = await getUser(1)
        const repos = await getRepositories(user.gitHubUsername)
        const commits = await getCommits(repos[0])
        console.log(commits)
    }
    catch(err){
        console.log(err.message)
    }
 
}
displayCommits()
console.log("After")

function desplayCommits(commits){
    console.log(commits);
}

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Readgin a user from a database")
            resolve({id:id,gitHubUsername:"mosh"})
        },2000)
    })
}
    
function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling github repository')
            //resolve(['repo1','repo2','repo3'])
            reject(new Error("Could not get the repos"))
        },2000)
    })
}

function getCommits(reps){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling github API")
            resolve(["commit"])
        },2000)
    })
}