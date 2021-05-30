import React from 'react'
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm:(id:string)=>void;
}

export const ActivityDetails = ({ activity,cancelSelectActivity,openForm }: Props) => {
    console.log(activity.category)
    return (
        <Card>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths="2">
                    <Button onClick={()=>openForm(activity.id)} basic color="blue" content="Edit" />
                    <Button basic color="grey" content="Cancel" onClick={cancelSelectActivity}/>
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
}
