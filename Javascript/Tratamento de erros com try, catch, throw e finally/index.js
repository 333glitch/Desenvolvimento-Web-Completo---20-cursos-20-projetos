const video = []
video['Category'] = 'Horror';
video['Name'] = 'Panic 3'


function getVideo(play) {
    try {
        console.log(video[0])
        throw new Error
    } catch (error) {
        if (Error) {
            console.log(`Give a error here: video don't find`)
        }
        console.log('Give a error here')
    }
    finally {
        console.log('Finally, after try and error.')
    }
}
getVideo();