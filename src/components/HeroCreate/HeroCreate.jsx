import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { CREATE_HERO } from '../../store/actions'
import AppInput from '../AppInput'
import * as ROUTES from '../../constants/routes'

export default function HeroCreate() {
  return (
    <div>
      <h1>Create hero</h1>
      <CreateHeroForm />
    </div>
  )
}

const useStyles = makeStyles({
  errorBar: {
    color: 'red'
  }
})

const CreateHeroFormBase = props => {
  const [name, setName] = useState('')
  const [skill, setSkill] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState({})

  const { register, handleSubmit, errors } = useForm()

  const history = useHistory()

  const classes = useStyles()

  const resetFormState = () => {
    setName('')
    setSkill('')
    setDescription('')
  }

  const onSubmit = () => {
    try {
      const id = new Date().valueOf()
      const photo = 'http://source.unsplash.com/random/600x400?jedi'
      const isSelected = false
      const hero = { id, name, skill, description, photo, isSelected }
      props.createHero(hero)
      resetFormState()
      history.push(`${ROUTES.HEROES}/${id}`)
    } catch (err) {
      setError(err)
    }
  }

  const nameInputProps = {
    id: 'name-input',
    label: 'Name',
    variant: 'outlined',
    name: 'name',
    value: name,
    onChange: event => setName(event.target.value),
    type: 'text',
    placeholder: 'Type hero  name...',
    register: register({
      required: 'Required'
    }),
    error: errors.name
  }
  const skillInputProps = {
    id: 'skill-input',
    label: 'Skill',
    variant: 'outlined',
    name: 'skill',
    value: skill,
    onChange: event => setSkill(event.target.value),
    type: 'text',
    placeholder: 'Type hero skill...',
    register: register({
      required: 'Required'
    }),
    error: errors.skill
  }
  const descriptionInputProps = {
    id: 'description-input',
    label: 'Description',
    variant: 'outlined',
    name: 'description',
    value: description,
    onChange: event => setDescription(event.target.value),
    type: 'text',
    placeholder: 'Type hero description...',
    register: register({
      required: 'Required'
    }),
    error: errors.description
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>{AppInput(nameInputProps)}</div>
      <div>{AppInput(skillInputProps)}</div>
      <div>{AppInput(descriptionInputProps)}</div>
      <Button variant="contained" color="primary" type="submit" size="large">
        Create
      </Button>
      <div className={classes.errorBar}>{error && <p>{error.message}</p>}</div>
    </form>
  )
}

const mapDispatchToState = dispatch => {
  return {
    createHero: hero => dispatch(CREATE_HERO({ payload: hero }))
  }
}

const CreateHeroForm = connect(null, mapDispatchToState)(CreateHeroFormBase)
