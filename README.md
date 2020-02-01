

# NoteWeb

A web app that allows a user to edit their notes and navigate their notes by the content rather than just the date or by folder.

## build steps

1. Download docker

2. Run  `image build -t noteweb ./noteweb`

2. Run  `image build -t flasknote ./flasknote`

3. Run  `docker container run --publish 3000:3000 --detach --name noteweb noteweb`

3. Run  `docker container run --publish 5000:5000 --detach --name flasknote flasknote`

The development build should be now running on port 3000.
