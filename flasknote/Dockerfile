FROM python:3
WORKDIR /app
ADD . /app
RUN pip install --no-cache-dir -r /app/requirements.txt
EXPOSE 5000
CMD /app/setup.sh