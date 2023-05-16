import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  RadioGroup,
  Stack,
  Radio,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Heading,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PICKUPS_QUERY } from '../utils/queries';
import { CREATE_PICKUP } from '../utils/mutations';
import { gql } from '@apollo/client';

export function NewPickup() {
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [recycleMaterial, setRecycleMaterial] = useState('');
  const [weight, setWeight] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pickups, setPickups] = useState([]);

  const { loading, data } = useQuery(GET_PICKUPS_QUERY);

  const [createPickup] = useMutation(CREATE_PICKUP, {
    update(cache, { data: { createPickup } }) {
      cache.modify({
        fields: {
          pickups(existingPickups = []) {
            const newPickupRef = cache.writeFragment({
              data: createPickup,
              fragment: gql`
                fragment NewPickup on Pickup {
                  _id
                  date
                  address
                  recycle_material
                  weight
                  phone_number
                }
              `,
            });
            return [...existingPickups, newPickupRef];
          },
        },
      });
    },
  });

  useEffect(() => {
    if (data && data.pickups) {
      setPickups(data.pickups);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPickup({
        variables: {
          date,
          address,
          recycle_material: recycleMaterial,
          weight,
          phone_number: phoneNumber,
        },
      });
      console.log('New pick up booking', date);
      setDate('');
      setAddress('');
      setRecycleMaterial('');
      setWeight(0);
      setPhoneNumber('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeDate = (e) => {
    setDate(e.currentTarget.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.currentTarget.value);
  };

  const handleChangeRecycleMaterial = (e) => {
    if (e.currentTarget) {
      setRecycleMaterial(e.currentTarget.value);
    }
  };

  const handleChangeWeight = (e) => {
    setWeight(e.currentTarget.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.currentTarget.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container direction="column">
      <Heading textAlign="center">Book a Pickup</Heading>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <FormControl padding="1em">
          <FormLabel>Date & Time of Pickup</FormLabel>
          <Input
            type="datetime-local"
            name="date"
            placeholder="Date & Time of Pickup"
            value={date}
            onChange={handleChangeDate}
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Pickup Address</FormLabel>
          <Input
            type="text"
            name="address"
            placeholder="Pickup Address"
            onChange={handleChangeAddress}
            focusBorderColor="green.400"
          />
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Recycle Material</FormLabel>
          <RadioGroup
            name="recycle_material"
            onChange={handleChangeRecycleMaterial}
          >
            <Stack spacing={5} direction="column">
              <Radio value="paper">Paper</Radio>
              <Radio value="plastic">Plastic</Radio>
              <Radio value="metal">Metal</Radio>
              <Radio value="glass">Glass</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Weight (in kg)</FormLabel>
          <InputGroup>
            <InputLeftAddon children="kg" />
            <Input
              type="Int"
              name="weight"
              placeholder="Weight"
              onChange={handleChangeWeight}
            />
          </InputGroup>
        </FormControl>
        <FormControl padding="1em">
          <FormLabel>Contact Phone Number</FormLabel>
          <Input
            type="text"
            name="phone_number"
            placeholder="Contact Phone Number"
            onChange={handleChangePhoneNumber}
            focusBorderColor="green.400"
          />
        </FormControl>
        <Button type="submit" colorScheme="green">
          Book Pickup
        </Button>
      </form>

      <Table>
        <Tbody>
          {pickups.map((pickup) => (
            <Tr key={pickup._id}>
              <Td>{pickup.date}</Td>
              <Td>{pickup.address}</Td>
              <Td>{pickup.recycle_material}</Td>
              <Td>{pickup.weight} kg</Td>
              <Td>{pickup.phone_number}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
}
