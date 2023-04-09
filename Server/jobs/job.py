from session.models import Feedback, Report, Session
from django.conf import settings
import os, csv, datetime


def run():
    
    with open(os.path.join(settings.BASE_DIR, 'input.csv'), 'a', newline='') as f:
        writer = csv.writer(f)
        
        queryset = Feedback.objects.filter(is_visited=False).all()
        for instance in queryset:
            writer.writerow([instance.session.slug, instance.param1, instance.param2, instance.param3])
            instance.is_visited = True
            instance.save() 
    
    oPath = os.path.join(settings.BASE_DIR, 'output.csv')
    
    if os.path.exists(oPath):
        with open(oPath, 'r', newline='', encoding='utf-8-sig') as f, open(os.path.join(settings.BASE_DIR, 'logs', 'rating.log'), 'a') as e:
            reader = csv.reader(f)

            for row in reader:
                session = Session.objects.filter(slug=row[0]).first()
                
                try:
                    instance = Report(session=session, param1=row[1], param2=row[2], param3=row[3])
                    instance.save()
                except:
                    e.write(str(datetime.datetime.now()))
                    for i in row:
                        e.write(i)
                    e.write('\n')
        
        os.remove(oPath)
