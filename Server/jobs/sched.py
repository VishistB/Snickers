from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from . import job

scheduler = BackgroundScheduler(jobstores={'default': SQLAlchemyJobStore(url='sqlite:///jobs.sqlite')})


def start():
    scheduler.add_job(job.run, 'interval', minutes=10, replace_existing=True, id='construct_csv', name='construct_csv')
    scheduler.start()
